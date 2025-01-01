import { Response } from "miragejs";

export const getProductitemHandler = function () {
  try {
    const products = this.db.products;
    
    // Extract relevant features from products
    const productFeatures = products.map(product => ({
    //   id: product._id,
    //   name: product.name,
      rating: product.rating,
      reviews: product.reviews,
      category: product.category_name,
    //   price: product.discounted_price,
    //   inStock: product.is_stock
    }));

    return new Response(
      200, 
      {}, 
      { 
        success: true,
        message: "Rohit Product Features Retrieved Successfully",
        totalProducts: productFeatures.length,
        features: productFeatures 
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        success: false,
        message: "Error in ROHit API Test",
        error: error.message
      }
    );
  }
}; 