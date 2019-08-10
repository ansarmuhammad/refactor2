
// to run this program
// just go to the folder where this file exists
// node <file name>

// removed the switch statement

(function() {
	"use strict";
 
	let obj_amount = { 'Movies': 100, 'Books': 200 , 'Other': 300};
	
	statement(obj_amount);
		
	function statement (obj)
	 {    
	 			
		for (let order of Object.keys(obj)) {
			let amount = obj[order];
		
			console.log("Order for ", order, " is against the amount: ", 
						calculate_order_amount(amount), ". It includes taxes");					
		}

	 }//end of function statement
	 
	function calculate_tax_percent (order_amount)
	 {    
	 	
		if (order_amount <= 100) return 10;
		else if (order_amount <= 200) return 20;
		else if (order_amount > 200) return 30;
		else return 0;
				

	 }//end of function calculate_tax_percent
	
	function calculate_order_amount (order_amount)
	 {  
		return order_amount = order_amount + (order_amount * calculate_tax_percent(order_amount)/100);	
		
	 }//end of function calculate_order_amount	
	
	 
}());