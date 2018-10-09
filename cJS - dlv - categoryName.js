/* EEC CategoryName - Custom JS for GTM - update 09-2018 MR//PD
- EEC dataExtract for FBads, ADW, and 3rdParty
- This function create new array and interact with dataLayer 
- {{dlv - pageHierarchy}} is a custom variable, or dataLayer extract categories levels as Array
*/


function() {
  	try{
      if({{Page Path}}.indexOf('/p/') != -1){
     	var categoryN = {{dlv - pageHierarchy}};
  		return categoryN.slice(-1)[0];
    }else if ({{Page Path}}.indexOf('/c/') != -1 || {{Page Path}}.indexOf('search') != -1){
       var categoryN = {{dlv - pageHierarchy}};
  		return categoryN.slice(-1)[0];
		}      
    } catch(e){
    window.console(e);
    }
}
