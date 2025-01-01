
import { Response } from "miragejs";

export const getProductItem = function () {
  try {
    const products = this.db.products;
    
    // Extract relevant features from products
    const productFeatures = products.map(product => ({
      id: product._id,
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
        message: "Sakib API Test - Product Features Retrieved Successfully",
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
        message: "Error in Sakib API Test",
        error: error.message
      }
    );
  }
}; 