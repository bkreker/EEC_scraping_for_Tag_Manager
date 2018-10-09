/* EEC ProductsName - Custom JS for GTM - update 09-2018 MR//PD
- EEC dataExtract for FBads, ADW, and 3rdParty
- This function create new array and interact with it
- Combine differents cases, when exist '/p/' product URL, '/c/' category URL, '/search/' searchQuery in URL, or event 'addToCart'
- 
*/


function() {
  	try{
      if ({{Page Path}}.indexOf('/p/') != -1 && {{Event}} != 'addToCart'){
  		var products = {{dlv - ecommerce.detail.products}};
  		return products.map(function(prod) { return prod.name; }).join();
	}else if ({{Page Path}}.indexOf('/c/') != -1 && {{Event}} != 'addToCart'){
  		var products = {{dlv - ecommerce.detail.products}};
  		return products.map(function(prod) { return prod.name; }).join();
	}else if ({{Page Path}}.indexOf('search') != -1 && {{Event}} != 'addToCart'){
  		var products = {{dlv - ecommerce.detail.products}};
  		return products.map(function(prod) { return prod.name; }).join();
	}else if ({{Event}} == 'addToCart'){
		var prods = {{dlv - EEC ecommerce.add.products}}[0];
		return prods.name;
	}
	} catch(e){
    window.console(e);
    }
}


