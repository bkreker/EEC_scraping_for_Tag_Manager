/*EEC checkoutValue - dataExtract for FBads, ADW, and 3rdParty
- scrape cart value as string and transform as FLOAT value
- function works only if your value in checkout has "dot" symbol or similar elementClass
 update 09-2018 MR//PD
*/

function() {
  	try{
        var value = document.getElementsByClassName('price')[0].innerText.replace(" €", "").replace(",", "."); //change "price" elementClass with yours, same for currency
  		return parseFloat(value);
	} catch(e){
    window.console(e);
    }
}

