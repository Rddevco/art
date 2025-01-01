import { Response } from "miragejs";

export const getProductdetailController = function () {
  try {
    const products = this.db.products;
    
    // Extract relevant features from products
    const productdetails = products.map(product => ({
      id: product._id,
      name: product.name,
      category: product.category_name,
      price: product.discounted_price,
    
    }));

    return new Response(
      200, 
      {}, 
      { 
        success: true,
        message: "Rahul API Test - Product details Retrieved Successfully",
        totalProducts: productdetails.length,
        detail: productdetails 
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        success: false,
        message: "Error in Rahul API Test",
        error: error.message
      }
    );
  }
}; 