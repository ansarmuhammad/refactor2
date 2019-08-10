
// to run this program
// just go to the folder where this file exists
// node refactor2

(function() {
	"use strict";
 
	var obj_amount = { 'Movies': 100, 'Books': 200 , 'Other': 300};
		
	function statement (obj)
	 {    
	 			
		for (var order of Object.keys(obj)) {
			var amount = obj[order];
			//console.log(order, amount);
			 
			var taxAmount = 0;
			
			switch (order) {
				case "Movies":
					taxAmount = 10;
					amount = taxAmount+amount;
					break;
				case "Books":        
					taxAmount = 11;        
					amount = taxAmount+ amount;        
				    break; 
				case "Other":        
					taxAmount = 12;        
					amount = taxAmount+amount;        
				    break;					
				default:          
					console.log("unknown order");      
			}
		
			console.log("Order for ", order, " is against the amount: ", amount, ". It includes taxes");
					
		}

	 }//end of function statement
	
	 statement(obj_amount);
	 
}());