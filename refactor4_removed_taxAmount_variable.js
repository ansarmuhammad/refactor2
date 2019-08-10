
// to run this program
// just go to the folder where this file exists
// node refactor2

// removed taxAmount variable

(function() {
	"use strict";
 
	var obj_amount = { 'Movies': 100, 'Books': 200 , 'Other': 300};
		
	function statement (obj)
	 {    
	 			
		for (var order of Object.keys(obj)) {
			var amount = obj[order];
			 
			switch (order) {
				case "Movies":
					amount += (amount * calculate_tax_percent(amount)/100);
					break;
				case "Books":        
					amount += (amount * calculate_tax_percent(amount)/100);        
				    break; 
				case "Other":        					   
					amount += (amount * calculate_tax_percent(amount)/100);					
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