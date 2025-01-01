import { Response } from "miragejs";


export const getProductEventController  = function() {
try{
const products = this.db.products;

const productFeatures = products.map(product => ({

id: product._id,
price: product.discounted_price,
inStock: product.is_stock,
// name: product.name,
rating: product.rating,
 reviews: product.reviews,
}));
 return new Response(
200,
{},
{
    success: true,
    message: "Apshan api product features listed",
    totalProducts: productFeatures.length,
    features: productFeatures 

}
);
}catch (error) {
    return new Response(
      500,
      {},
      {
        success: false,
        message: "Error in apshan API Test",
        error: error.message
      }
    );
}
};