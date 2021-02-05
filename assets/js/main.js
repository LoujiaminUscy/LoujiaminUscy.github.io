(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        // Magnific Popup
        $('.video-btn').magnificPopup({
            
            type:'video'
        });
        
        // Slicknav
        $('#traffic-menu').slicknav({
			
			   prependTo:'#mobile-menu-wrap'

		    });

        // Owl Carousel
        $('.hero-slide').owlCarousel({
            
            items: 1,
            loop: true,
            autoplay: false,
            dots: true,
            nav: false,
            //navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });


        // Contact Form
        
        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('.form-message');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
          // Stop the browser from submitting the form.
          e.preventDefault();

          // Serialize the form data.
          var formData = $(form).serialize();

          // Submit the form using AJAX.
          $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
          })
          .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
          })
          .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
              $(formMessages).text(data.responseText);
            } else {
              $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
          });
        });


    });


    jQuery(window).load(function(){


            // Wait for window load
            $(window).on('load', function() {
               $(".se-pre-con").fadeOut("slow");;
            });


            //wow
            new WOW().init();
            window.wow = new WOW(
                          {
                          boxClass:     'wow',      // default
                          animateClass: 'animated', // default
                          offset:       0,          // default
                          mobile:       true,       // default
                          live:         true,        // default
                          offset: 100
                        }
                        )
                        window.wow.init();

        
    });


}(jQuery));	