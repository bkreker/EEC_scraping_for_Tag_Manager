/*EEC productPrice from addToCart event - update 09-2018 MR//PD
- dataExtract for FBads, ADW, and 3rdParty  
- when event fires 'addToCart' extract price from dlv-products
*/

function() {
  	try{
      if ({{Event}} == "addToCart"){
        var products = {{dlv - EEC ecommerce.add.products}};
		for (i=0; i<products.length; i++)
			return products[i].price;	
		}
	} catch(e){
    window.console(e);
    }
}
