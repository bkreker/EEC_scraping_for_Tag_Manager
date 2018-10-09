/* EEC categoryList - Custom JS for GTM - update 09-2018 MR//PD
- EEC dataExtract for FBads, ADW, and 3rdParty
- This function create new array and use separator '>' 
- {{dlv - pageHierarchy}} is a custom variable, or dataLayer extract categories levels as Array
*/

function() {
  	try{
      if({{Page Path}}.indexOf('/p/') != -1){ //change /p/ with URL of your product
     	var category = {{dlv - pageHierarchy}}; // create a custom variable PageHierarchy with ARRAY of different categories Levels
  		return category.slice(1).slice().join(" > ");
    }else if ({{Page Path}}.indexOf('/c/') != -1){ //change /c/ with URL of your category
       var category = {{dlv - pageHierarchy}};
  		return category.slice(1).slice().join(" > ");
		}      
    } catch(e){
    window.console(e);
    }
}
