
// to run this program
// just go to the folder where this file exists
// node <file name>

// we will try to add the logic that if the total order is above 500 (including applied taxes) 
// then we should apply additional 15% VAT
// we will also convert literal values to constants 

(function() {
	"use strict";
 
	let obj_amount = { 'Movies': 100, 'Books': 200 , 'Other': 300};
    
    statement(obj_amount);
    
    console.log(" XXXXXXXXXXXXXXXXXXXXXXXX");
    console.log(" NOW WE ARE RUNNING TESTS");
    console.log(" XXXXXXXXXXXXXXXXXXXXXXXX");

    run_tests();
        
    function run_tests()
    {
        check_total_amount();
        check_order_value_with_VAT();

    }

    function check_total_amount()
    {
        console.log("cannot test without refactoring code");
    }

    function check_order_value_with_VAT()
    {

        let expected = 851; // (110+240+390)*15/100
        
	    let test_obj_amount = { 'Movies': 100, 'Books': 200 , 'Other': 300};
        let result =  statement (test_obj_amount);

        if (result == expected) { console.log("Congrats, your test has passed!")}
        else console.log("Test failure. Expected value of: ", expected, 
                            " is not equal to result: ", result);
    
    }
    

	function statement (obj)
	 {    
    
        const VALUE_ON_WHICH_TO_APPLY_VAT=500;
        const VAT=15;
        let total_amount = 0;
			

		for (let order of Object.keys(obj)) {
			let amount = obj[order];
            //console.log("Order for ", order, " is against the amount: ", 
            //            calculate_order_amount(amount), ". It includes taxes");	
            
            total_amount += calculate_order_amount(amount);
            
        }
        
        console.log("total amount is equal to: ", total_amount, " before application of tax");
        if (total_amount > VALUE_ON_WHICH_TO_APPLY_VAT) 
            console.log("Total order value with tax applied: ", calculate_final_order_amount_with_VAT(total_amount,VAT)); 

        return calculate_final_order_amount_with_VAT(total_amount,VAT);
	 }//end of function statement
	 
	function calculate_tax_percent (order_amount)
	 {    
         
        const LESS_THAN_OR_EQUAL_TO_100 = 10;
        const LESS_THAN_OR_EQUAL_TO_200 = 20;
        const HIGHER_THAN_200 = 30;

		if (order_amount <= 100) return LESS_THAN_OR_EQUAL_TO_100;
		else if (order_amount <= 200) return LESS_THAN_OR_EQUAL_TO_200;
		else if (order_amount > 200) return HIGHER_THAN_200;
		else return 0;
				

	 }//end of function calculate_tax_percent
	
	function calculate_order_amount (order_amount)
	 {  
		return order_amount = order_amount + (order_amount * calculate_tax_percent(order_amount)/100);	
		
	 }//end of function calculate_order_amount	
    
     function calculate_final_order_amount_with_VAT(total_amount,VAT) {
        return (total_amount +total_amount*VAT/100)
     }
	 
}());