/* EEC purchase - custom JS - update 09-2018
- extract from dataLayer ecommerce.purchase all Prods datas
- transform vars into new ARRAY
*/


function(){
	var json_data = {{dlv - EEC ecommerce.purchase.products}};
	var result = [];

	for(var i in json_data)
    	result.push([i, json_data [i]]);
	return result;
}