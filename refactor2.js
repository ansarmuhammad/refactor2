
// to run this program
// just go to the folder where this file exists
// node refactor2

// added tax calculate method to make statement function simpler to read

(function() {
	"use strict";
 
	var obj_amount = { 'Movies': 100, 'Books': 200 , 'Other': 300};
	var obj_tax = {'Less than equal to 100': 10, 'Less than equal to 200': 20, 'Over 200': 30}
	
		
	function statement (obj, tax)
	 {    
	 			
		for (var order of Object.keys(obj)) {
			var amount = obj[order];
			//console.log(order, amount);
			 
			var taxAmount = 0;
			
			switch (order) {
				case "Movies":
					taxAmount = amount * 10/100;
					amount = taxAmount+amount;
					break;
				case "Books":        
					taxAmount = amount * 20/100;        
					amount = taxAmount+ amount;        
				    break; 
				case "Other":        
					taxAmount = amount * 30/100;        
					amount = taxAmount+amount;        
				    break;					
				default:          
					console.log("unknown order");      
			}
		
			console.log("Order for ", order, " is against the amount: ", amount, ". It includes taxes");
					
		}

	 }//end of function statement
	 
	function calculate_tax (tax)
	 {    
		var tax_percent = 0;
	 			

	 }//end of function calculate_tax
	 
	
	 statement(obj_amount, obj_tax);
	 
}());