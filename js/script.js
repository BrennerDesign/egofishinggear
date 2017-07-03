$(document).ready(function() {

	var doc_height = $(window).height();
	var doc_width = $(window).width();

	var total_doc_height = $(document).height();





// flex slider - product sliders
	$('#product_slider').flexslider({
		animation: "slide",
		animationLoop: true,
		controlNav: true,
		directionNav: true,
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

	// slider mobile image margin
	var slider_mobile_marg = (((523 - doc_width) / 2) * -1);
	if (doc_width < 480) {
		$('.flexslider .slides img').css('margin-left', slider_mobile_marg);
	}


	// trout net page header image margin
	if (doc_width < 2000) {
		var troutHeaderMarg = ((2000 - doc_width) / 2) * -1;
		$('img.header_bgd_img').css('left', troutHeaderMarg);
	}



	// subnav submenu button clicks
	$('.top_nav_bar a.has_sub_menu').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('expanded')) {
			$(this).removeClass('expanded');
			$(this).next().css('display', 'none');
			$('.top_nav_bar .sub_nav_link').css('display', 'block').css('border-bottom', '2px solid #c4c4c4');
		} else {
			$(this).addClass('expanded');
			$('.top_nav_bar .sub_nav_link').css('display', 'none').css('border-bottom', 'none');
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
			$('.product_expander').removeClass('expanded');
			$('.expander_info').slideUp();
			$(this).addClass('expanded');
			$(this).next().slideDown();
			setTimeout(scrollPos, 400);
		}
	});

	function scrollPos() {
		$.scrollTo($('.expanded'),'slow', {
			offset: -150
		});
	}
	








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

		// slider mobile image margin
		var slider_mobile_marg = (((523 - doc_width) / 2) * -1);
		if (doc_width < 480) {
			$('.flexslider .slides img').css('margin-left', slider_mobile_marg);
		} else {
			$('.flexslider .slides img').css('margin-left', '0');
		}

		// trout net page header image margin
		if (doc_width < 2000) {
			var troutHeaderMarg = ((2000 - doc_width) / 2) * -1;
			$('img.header_bgd_img').css('left', troutHeaderMarg);
		} else {
			$('img.header_bgd_img').css('left', '0');
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