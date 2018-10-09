/*EEC productPrice from DLV detailProducts - update 09-2018 MR//PD
- dataExtract for FBads, ADW, and 3rdParty  
- create new ARRAY with floatValues per each prods price
*/

function() {
  	try{
        var products = {{dlv - ecommerce.detail.products}};
  		return parseFloat(products.map(function(prod) { return prod.price; }).join());
	} catch(e){
    window.console(e);
    }
}
