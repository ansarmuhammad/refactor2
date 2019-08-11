
// to run this program
// just go to the folder where this file exists
// node <file name>

// extract our customer assert function from the tests
// added to git here: https://github.com/ansarmuhammad/refactor2
// REVISIT THE LETSCODEJAVASCRIPT VIDEO 11 FOR RECORDED LIVE

(function() {
	"use strict";
 
	let obj_amount = { 'Movies': 100, 'Books': 200 , 'Other': 300};
    
    const VALUE_ON_WHICH_TO_APPLY_VAT=500;
    const VAT=15;

    let computer_order_value_with_VAT = statement(obj_amount);
                        
    print_total_order_amount(computer_order_value_with_VAT);
    
    console.log(" XXXXXXXXXXXXXXXXXXXXXXXX");
    console.log(" NOW WE ARE RUNNING TESTS");
    console.log(" XXXXXXXXXXXXXXXXXXXXXXXX");

    run_tests();
        
    // http server code start



    var http = require ("http");
    var server;

    var request = http.get("http://localhost:8080");
    request.on ("response", function(response)
        {
            var receivedDate = false;
            response.setEncoding("utf8");
            console.log(" query on response returns: ", response.statusCode);
        

            response.on("data",function(chunk){
                receivedDate = true;
                console.log(" response on data: ", chunk);

            }
        
         );
        }
    );

    exports.start = function (portNumber){
        server = http.createServer();
        server.on("request", function(request, response){
            response.end("Hello world!");
        });
        server.listen(portNumber);

    } // end of function 
 
    // http server code end
    
	function statement (obj)
	 {    
    
        let total_amount = 0;
			

		for (let order of Object.keys(obj)) {
			let amount = obj[order];
            
            total_amount += calculate_order_amount(amount);
            
        }
        
        //console.log("Total amount is equal to: ", total_amount, " before application of tax");
        
        if (total_amount > VALUE_ON_WHICH_TO_APPLY_VAT) 
            return calculate_final_order_amount_with_VAT(total_amount,VAT);
        else
            return calculate_final_order_amount_with_VAT(total_amount,0); // VAT won't apply
            
        }//end of function statement
     
    function print_total_order_amount (computed_value)
    {
            console.log("Total order value with tax applied: ", computed_value); 

    }

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
     
     function run_tests()
     {
         check_tax_percent();
         check_order_value_with_VAT();
         check_order_value_without_VAT()
     }
 
     function check_tax_percent()
     {
 
         let test_name = "check_tax_percent()";
         let expected = 30; // fits the condition where 30 is retured
         
         let test_amount=1000;
         
         let result = calculate_tax_percent (test_amount);
 
         test_assert(test_name,expected,result);
         
     }     
 
     function check_order_value_with_VAT()
     {
         
         let test_name= "check_order_value_with_VAT()";
         let expected = 851; // (110+240+390)*15/100
         
         let test_obj_amount = { 'Movies': 100, 'Books': 200 , 'Other': 300};
         let result =  statement (test_obj_amount);
 
         test_assert(test_name,expected,result);
         
     }
     
     function check_order_value_without_VAT()
     {
         let test_name= "check_order_value_without_VAT()";
         let expected = 110; (100+ (100 * 10/100)) 
         
         let test_obj_amount = { 'Movies': 100};
         let result =  statement (test_obj_amount);
 
         test_assert(test_name,expected,result);
         
     }

     function test_assert(test_name,expected,result){
 
        if (result == expected) { console.log("Congrats, your test ", test_name,  "has passed!")}
            else console.log("Test failure: check_tax_percent(). Expected value of: ", expected, 
                        " is not equal to result: ", result);

    }

  
}());