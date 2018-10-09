/* EEC ProductsIDs - Custom JS for GTM - update 09-2018 MR//PD
- EEC dataExtract for FBads, ADW, and 3rdParty
- This function create new array and interact with it
- Combine differents cases, when exist '/p/' product URL, '/c/' category URL, '/search/' searchQuery in URL, or event 'addToCart'
- 
*/


function() {
  	try{
      if({{Page Path}}.indexOf('/p/') != -1 && {{Event}} != "addToCart"){
  		var products = {{dlv - ecommerce.detail.products}};
  		return products.slice(0,10).reduce(function(arr, prod) { return arr.concat(prod.id); }, []);
    }else if({{Page Path}}.indexOf('/c/') != -1 && {{Event}} != "addToCart"){
      	var list = {{dlv - ecommerce.impressions}};
  		return list.slice(0,10).reduce(function(arr, lis) { return arr.concat(lis.id); }, []);
    }else if({{Page Path}}.indexOf('search') != -1 && {{Event}} != "addToCart"){
      	var list = {{dlv - ecommerce.impressions}};
  		return list.slice(0,10).reduce(function(arr, lis) { return arr.concat(lis.id); }, []);
	} else if ({{Event}} == "addToCart"){
        var products = {{dlv - EEC ecommerce.add.products}}[0];
		return products.id.split();
		}
	}catch(e){
    window.console(e);
    }
}

