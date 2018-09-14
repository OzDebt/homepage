
$(document).ready(function(){
	"use strict";

	var ua = window.navigator.userAgent;
    var msie = 'user_agent';
	if(ua.indexOf("MSIE") > -1){
		msie = 'msie_agent';
	}else if(ua.indexOf("Trident") > -1){
		msie = 'msie_agent';
	}
	
	console.log(msie);
	
	$(document.body).addClass(msie);
	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
   /* $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });*/
	
	$('.request-demo').magnificPopup({
		  delegate: 'a',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  closeMarkup: '<a title="%title%" href="javascript:void(0)" class="mfp-close">X</a>',
		  callbacks: {
			beforeOpen: function() {
			   this.st.mainClass = this.st.el.attr('data-effect');
			   $(document.body).addClass('magnific-active');
			},
			afterClose: function() {
				$(document.body).removeClass('magnific-active');
			}
		  },
		  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});

	if($(document).find('.our-process-item').length > 0){		
		$('.our-process-item').owlCarousel({
				loop:true,
				margin:10,
				dots:true,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
						
					},
					520:{
						items:1,
						nav:false,
						dots:true,
					},
					768:{
						items:3,
						
						dots:true,
					},
					850:{
						items:4,
						nav:false,
						loop:false,
						dots:false,
					}
				}
			})
	}
	
	jQuery(document).on('click', '.c-hamburger', function() {
		jQuery(this).toggleClass('is-active');	
		jQuery('.headers').toggleClass('active_menu');
		jQuery(document.body).toggleClass('push-toright');
		var $height = parseInt(jQuery(window).height());
		jQuery("#nav-main").css('max-height',$height);
		
	});	

    // Add smooth scrolling to Menu links

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      
    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
 });
