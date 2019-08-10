
// to run this program
// just go to the folder where this file exists
// node refactor2

// added calculate_order_amount function

(function() {
	"use strict";
 
	var obj_amount = { 'Movies': 100, 'Books': 200 , 'Other': 300};
		
	function statement (obj)
	 {    
	 			
		for (var order of Object.keys(obj)) {
			var amount = obj[order];
			 
			switch (order) {
				case "Movies":
					calculate_order_amount(amount);
					break;
				case "Books":        
					calculate_order_amount(amount);
					break; 
				case "Other":        					   
					calculate_order_amount(amount);
					break;					
				default:          
					console.log("unknown order");   
					
			}
		
			console.log("Order for ", order, " is against the amount: ", calculate_order_amount(amount), ". It includes taxes");
					
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
	
	function calculate_order_amount (order_amount)
	 {  
		order_amount = order_amount + (order_amount * calculate_tax_percent(order_amount)/100);	
		return order_amount;
	 }//end of function calculate_order_amount	
	
	 statement(obj_amount);
	 
}());