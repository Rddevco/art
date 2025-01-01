const testAPI = async () => {
    try {
      
     
      const response = await fetch('/api/apshan-test/product-summary');
      const data = await response.json();
      console.log('apshan API Test Response:', data);
    } catch (error) {
      console.error('system apshan API errorr:', error);
    }
  
  };
  
  testAPI(); 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const response = await fetch('/api/alishan-test/product-features');
   // const response = await fetch('/api/rahul-test/product-details');