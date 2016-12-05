// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
  $("#email_form").validate({
      rules: { 
            "email_1":{
              required: true,
              email: true,
            },
            "email_2": {
              required: true,
              email: true,
              equalTo: "#email_1",    
            },
            
            "name":{
              required: true, 
              minlength: 2, 
              
             }, 
               
            "message":{
              required: true,
                 
            },       
               
      },
        messages: {
          "email_1":{
           required: "Email Address is Required",
           email: "Please enter a valid email adress",
          },
          "email_2": { 
            required: "Email is required",
            email: "Please enter a valid email adress",
            equalTo : "Email Adress must match",
          },
         "name":{
           required: "Name is required", 
           minlength: "Please enter a valid name more than 2 letters",
                
          }, 
          
          "message":{
           required: "Address is required",
            
           
           },
     
          },
          
     
        });
      
          

  });
  
         