$(function() {


    //function to disable/enable button depending on the state of the checkbox
    $(document).ready(function() {
        
        
     $('#check').prop('checked', false);




        /*
            if (event.target.type !== 'checkbox') {
                $(':checkbox', this).trigger('click');
            }*/
        $('#check').change(function() {
            console.log("working");
            valgte = $('#check').prop("checked");
            
            if(valgte === true){

                $('#sendButton').removeClass("disabled");

            }else{
                $('#sendButton').addClass("disabled");
            }
        });



                               });

    
     //disables non-integer input for zip code
        $("#zipcode").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });

        //disables non-integer input for last 4# of SSN
        $("#ssn").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });
    
    
$(document).ready(function() {
    $('#contactForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'user[firstname]': {
                row: '.col-md-9',
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            'user[lastname]': {
                row: '.col-md-12',
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            
           
        }
    });
});

 

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
    
    /*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');





       
    
    
    
    
    
    
    
    
    

    });

    
    
    
});





 