jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	// Preloader js
	$(window).on('load', function () {
		$('#preloader').fadeOut(700);
	});


	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	// $('.image-popup').magnificPopup({
	// 	type: 'image',
	// 	removalDelay: 160, //delay removal by X to allow out-animation
	// 	callbacks: {
	// 		beforeOpen: function () {
	// 			// just a hack that adds mfp-anim class to markup
	// 			this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
	// 			this.st.mainClass = this.st.el.attr('data-effect');
	// 		}
	// 	},
	// 	closeOnContentClick: true,
	// 	midClick: true,
	// 	fixedContentPos: false,
	// 	fixedBgPos: true
	// 
});

// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});

//https://github.com/matthieua/WOW/issues/196#issuecomment-348734401
var scrolled = false;
$(window).on('scroll', function () {
	if (!scrolled) {
		scrolled = true;
		wow.init();
	}
})

// $('portfolio-item').on("touchstart", function (e) {
// 	'use strict'; //satisfy code inspectors
//         $(this).trigger('hover');
//     }).on('touchend', function () {
//         $(this).trigger('hover');
// });

