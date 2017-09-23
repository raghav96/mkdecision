$(function() {

<<<<<<< HEAD

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

 
=======
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });
>>>>>>> 26b71c0fc852f03daea7787c66fea84765c85129

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
<<<<<<< HEAD
    
    /*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');





       
    
    
    
    
    
    
    
    
    

    });

    
    
    
});





 
=======
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
>>>>>>> 26b71c0fc852f03daea7787c66fea84765c85129
