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

});

/* Mixitup Portfolio */
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
	$('.skills-info').appear(function() {
	$('.skill1').css('width', '85%');
	$('.skill2').css('width', '80%');
	$('.skill3').css('width', '85%');
	$('.skill4').css('width', '53%');
	$('.skill5').css('width', '69%');
	},{accX: 0, accY: -150});
	
	$('body').particleground({
	    dotColor: '#00D8FF',
	    lineColor: '#00D8FF'
	});

	// get posts from my blog ~

	$.getJSON( "http://neurobits.cl/api/posts/", function( data ) {
	  var items = [];

	  $.each( data, function( key, val ) {
	    items.push( "<li id='" + key + "'>" + val + "</li>" );
	  });

	  $( "<ul/>", { "class": "posts", html: items.join( "" ) }).appendTo( "#listadoposts" );

	});



});