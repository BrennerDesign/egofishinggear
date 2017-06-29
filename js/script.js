$(document).ready(function() {

	var doc_height = $(window).height();
	var doc_width = $(window).width();

	var total_doc_height = $(document).height();





// flex slider - product sliders
	$('#product_slider').flexslider({
		animation: "slide",
		animationLoop: true,
		controlNav: true,
		directionNav: false,
		slideshow: false,
		animationSpeed: 800
	});
	

	
	


	// main nav hover
	$('.sub_nav_link').hover(function() {
		if ($(this).hasClass('active')) {
		} else {
			if (doc_width > 980) {
				$(this).find('.sub-menu-cont').css('display', 'block');
				$(this).find('.hover_bar').css('background-color', '#CC1015');
				$(this).find('.sub-menu').animate({
					top: 0
				}, 250);
			} else {

			}
		}
	}, function () {
		if ($(this).hasClass('active')) {
		} else {
			if (doc_width > 980) {
				$(this).find('.hover_bar').css('background-color', '#000000');
				$(this).find('.sub-menu').animate({
					top: -300
				}, 250, function() {
					$(this).parent().css('display', 'none');
				});
			} else {

			}
		}
	});




	// main nav height for mobile
	if (doc_width < 980) {
		$('.top_nav_bar ul.main_menu').css('height', total_doc_height);
	}



	// subnav submenu button clicks
	$('.top_nav_bar a.has_sub_menu').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('expanded')) {
			$(this).removeClass('expanded');
			$(this).next().css('display', 'none');
			$('.top_nav_bar .sub_nav_link').css('display', 'block');
		} else {
			$(this).addClass('expanded');
			$('.top_nav_bar .sub_nav_link').css('display', 'none');
			$(this).parent().css('display', 'block');
			$(this).next().css('display', 'block');
		}
	});



	// product expander button clicks
	$('.product_expander').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('expanded')) {
			$(this).removeClass('expanded');
			$(this).next().slideUp();
		} else {
			$(this).addClass('expanded');
			$(this).next().slideDown();
		}
	});




	// about button clicks
	$('#menu-about_menu .what a').click(function(e) {
		e.preventDefault();
		$.scrollTo('.What','slow', {
			offset: -55
		});
	});
	$('#menu-about_menu .how a').click(function(e) {
		e.preventDefault();
		$.scrollTo('.How','slow', {
			offset: -55
		});
	});
	$('#menu-about_menu .who a').click(function(e) {
		e.preventDefault();
		$.scrollTo('.Who','slow', {
			offset: -55
		});
	});






	// mobile nav click
	$('.mobile_nav').bind("click touchstart", function(e) {
		e.preventDefault();
		// close if already active
		if ($('.mobile_nav').hasClass('active')) {
			hideList();
		} else {
			// open if not active
			$('.mobile_nav').addClass('active');
			$('.top_nav_bar ul.sub_menu').animate({
				right: "0"
			}, 200);
			$('.top_nav_bar ul.main_menu').animate({
				right: "-5.5%"
			}, 200);
		}
   });


	// hide menu items
	function hideList() {
		$('.top_nav_bar ul').animate({
			right: "-=380"
		}, 200, function() {
			$('.mobile_nav').removeClass('active');
		});
	}

	$('.top_nav_bar ul').bind("click touchstart", function() {
		if (doc_width > 980) {
			hideList();
		} else {

		}
   });

	$('.menu-top_nav-container a').bind("click touchstart", function(e) {
		e.stopPropagation();
	});








	// when browser is resized
	$(window).resize(function() {

		doc_width = $(window).width();
		doc_height = $(window).height();

		total_doc_height = $(document).height();



		// main nav height for mobile
		if (doc_width < 980) {
			$('.top_nav_bar ul.main_menu').css('height', total_doc_height);
		} else {
			$('.top_nav_bar ul.main_menu').css('height', 'auto');
		}


		// main nav hover
		$('.sub_nav_link').hover(function() {
			if ($(this).hasClass('active')) {
			} else {
				if (doc_width > 980) {
					$(this).find('.sub-menu-cont').css('display', 'block');
					$(this).find('.hover_bar').css('background-color', '#CC1015');
					$(this).find('.sub-menu').animate({
						top: 0
					}, 250);
				} else {

				}
			}
		}, function () {
			if ($(this).hasClass('active')) {
			} else {
				if (doc_width > 980) {
					$(this).find('.hover_bar').css('background-color', '#000000');
					$(this).find('.sub-menu').animate({
						top: -300
					}, 250, function() {
						$(this).parent().css('display', 'none');
					});
				} else {

				}
			}
		});

		


	});
  
});