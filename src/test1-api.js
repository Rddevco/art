const testAPI = async () => {
    try {
      
      // const response = await fetch('/api/rahul-test/product-details');
      const response = await fetch('/api/rohit-test/product-details');
      const data = await response.json();
      console.log('Rohit API Test Response:', data);
    } catch (error) {
      console.error('Error Rohit testing API:', error);
    }
  
  };
  
  testAPI(); 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const response = await fetch('/api/alishan-test/product-features');