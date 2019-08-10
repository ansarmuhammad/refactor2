
// to run this program
// just go to the folder where this file exists
// node refactor2

// added tax calculate method to make statement function simpler to read

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
					taxAmount = amount * calculate_tax_percent(amount)/100;
					amount = taxAmount+amount;
					break;
				case "Books":        
					taxAmount = amount * calculate_tax_percent(amount)/100;        
					amount = taxAmount+ amount;        
				    break; 
				case "Other":        
					taxAmount = amount * calculate_tax_percent(amount)/100;        
					amount = taxAmount+amount;        
				    break;					
				default:          
					console.log("unknown order");      
			}
		
			console.log("Order for ", order, " is against the amount: ", amount, ". It includes taxes");
					
		}

	 }//end of function statement
	 
	function calculate_tax_percent (order_amount)
	 {    
		var tax_percent = 0;
	 	
		if (order_amount <= 100) return 10;
		else if (order_amount <= 200) return 20;
		else if (order_amount > 200) return 30;
		else return 0;		
				

	 }//end of function calculate_tax_percent
	 
	
	 statement(obj_amount);
	 
}());