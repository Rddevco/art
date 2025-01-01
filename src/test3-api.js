const TESTAPI  = async () =>{
try{
 const response = await fetch('/api/sakib-test/product-summary')
 const data  = response.json();
 console.log("sakib api data fetched succesfully");


}
catch{ (error)

    console.log("sakib api error fetching items data");


}

}
TESTAPI () 