$(window).load(function() {
  "use strict";
    
    $(".main-content").delay(600).fadeIn("slow");
	//$("#mask").delay(1000).fadeOut("slow");

	$('.flexslider').flexslider({
		animation: "fade",
		start: function(slider) {
			$('.np-controls a.next').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("next"));
			});
			$('.np-controls a.previous').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("previous"));
			});
		}
	});

	/*
	$.getJSON( "http://127.0.0.1:3000/api/posts", function( data ) {
	  var items = [];

	  $.each( data, function( key, val ) {

	    
	    items.push('<li class="blogpost"><a href="http://neurobits.cl/blog/post/'+val.slug+'">'+val.title+'</a></li>');
	   	
	   	return key<5;

	  });
	  
	  $( "<ul/>", { "class": "posts", html: items.join( "" ) }).appendTo( "#listadoposts" );
	
	});*/


});

/* Mixitup Portafolio */
/*
jQuery(document).ready(function($) {
  "use strict";
	$('#portfolio').mixitup({
		targetSelector: '.item',
		transitionSpeed: 450
	});
});
*/

/* Skills */
jQuery(document).ready(function($) {
	"use strict";
/*	$('.skills-info').appear(function() {
	$('.skill1').css('width', '85%');
	$('.skill2').css('width', '80%');
	$('.skill3').css('width', '85%');
	$('.skill4').css('width', '53%');
	$('.skill5').css('width', '69%');
	},{accX: 0, accY: -150}); */
	
	$('body').particleground({
	    dotColor: '#00D8FF',
	    lineColor: '#00D8FF'
	});


});