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


	// flex slider - s2 ad block sliders
	$('#ad_slider').flexslider({
		animation: "slide",
		animationLoop: true,
		controlNav: false,
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




	// filter expand / select
	$('.selected_box.selected').click(function(e) {
		e.preventDefault();
		$('.filter_expand.expanded').slideUp(200, function() {
		      $(this).removeClass("expanded");
		})
		$(this).delay(230).fadeOut(120, function() {
		      $(this).removeClass("selected");
		})
	});

	$('.filter_title.length').click(function(e) {
		e.preventDefault();
		if ($(this).find('.selected_box').hasClass("selected")) {
			$('.filter_expand.expanded').slideUp(200, function() {
			      $(this).removeClass("expanded");
			})
			$(this).find('.selected_box').delay(230).fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
		} else {
			$('.filter_expand.expanded').slideUp(200, function() {
			      $(this).removeClass("expanded");
			})
			$('.selected_box.selected').fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
			$('.filter_expand.length').slideDown(200, function() {
		      	$(this).addClass("expanded");
			})
			$(this).find('.selected_box').delay(230).fadeIn(120, function() {
		      	$(this).addClass("selected");
			})
		}
	});

	$('.filter_title.size').click(function(e) {
		e.preventDefault();
		if ($(this).find('.selected_box').hasClass("selected")) {
			$('.filter_expand.expanded').slideUp(200, function() {
			      $(this).removeClass("expanded");
			})
			$(this).find('.selected_box').delay(230).fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
		} else {
			$('.filter_expand.expanded').slideUp(200, function() {
			      $(this).removeClass("expanded");
			})
			$('.selected_box.selected').fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
			$('.filter_expand.size').slideDown(200, function() {
		      	$(this).addClass("expanded");
			})
			$(this).find('.selected_box').delay(230).fadeIn(120, function() {
		      	$(this).addClass("selected");
			})
		}
	});

	$('.filter_title.type').click(function(e) {
		e.preventDefault();
		if ($(this).find('.selected_box').hasClass("selected")) {
			$('.filter_expand.expanded').slideUp(200, function() {
			      $(this).removeClass("expanded");
			})
			$(this).find('.selected_box').delay(230).fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
		} else {
			$('.filter_expand.expanded').slideUp(200, function() {
			      $(this).removeClass("expanded");
			})
			$('.selected_box.selected').fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
			$('.filter_expand.type').slideDown(200, function() {
		      	$(this).addClass("expanded");
			})
			$(this).find('.selected_box').delay(230).fadeIn(120, function() {
		      	$(this).addClass("selected");
			})
		};
	});



	// if filter option is selected
	if ($('.filter_expand input#compact_opt').is(':checked')) {
		$('.product_specs.cards .product_card').fadeOut();
		$('.product_specs.cards .product_card.compact').fadeIn();
	}

	if ($('.filter_expand input#standard_opt').is(':checked')) {
		$('.product_specs.cards .product_card').fadeOut();
		$('.product_specs.cards .product_card.standard').fadeIn();
	}

	if ($('.filter_expand input#reach_opt').is(':checked')) {
		$('.product_specs.cards .product_card').fadeOut();
		$('.product_specs.cards .product_card.reach').fadeIn();
	}
	// if filter option is clicked on
	$('.filter_expand input#compact_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card').fadeOut();
			$('.product_specs.cards .product_card.compact').fadeIn();
		} else {
			$('.product_specs.cards .product_card').fadeIn();
		}
	});
	$('.filter_expand input#standard_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card').fadeOut();
			$('.product_specs.cards .product_card.standard').fadeIn();
		} else {
			$('.product_specs.cards .product_card').fadeIn();
		}
	});
	$('.filter_expand input#reach_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card').fadeOut();
			$('.product_specs.cards .product_card.reach').fadeIn();
		} else {
			$('.product_specs.cards .product_card').fadeIn();
		}
	});






	// main nav height for mobile
	if (doc_width < 980) {
		$('.top_nav_bar ul.main_menu').css('height', total_doc_height);
	}

	// product slider mobile image margin
	var slider_mobile_marg = (((523 - doc_width) / 2) * -1);
	if (doc_width < 480) {
		$('#product_slider.flexslider .slides img').css('margin-left', slider_mobile_marg);
	}


	// smaller ad background image margin
	var small_ad_marg = (($('.ad_block.text_ad img').width() - $('.ad_block.text_ad').width()) / 2) * -1;
	if (small_ad_marg < 0) {
		$('.ad_block.text_ad img').css('margin-left', small_ad_marg);
	}


	// trout net page header image margin
	if (doc_width < 2000) {
		var troutHeaderMarg = ((2000 - doc_width) / 2) * -1;
		$('img.header_bgd_img').css('left', troutHeaderMarg);
	}

	// featured product page header image margin
	var prodHeaderMarg = ((1400 - doc_width) / 2) * -1;
	if (doc_width < 1400) {
		prodHeaderMarg = ((1400 - doc_width) / 2) * -1;
		$('img.featured_prod').css('left', prodHeaderMarg);
	} else if (doc_width < 580) {
		prodHeaderMarg = ((810 - doc_width) / 2) * -1;
		$('img.featured_prod').css('left', prodHeaderMarg);
	}

	// s1 slider ad block image margin
	var s1imgMarg = ((1062 - doc_width) / 2) * -1;
	if (doc_width < 1040) {
		s1imgMarg = ((1062 - doc_width) / 2) * -1;
		$('img.backgrnd').css('left', s1imgMarg);
		$('.product_ads.kryptek .ad_block.awards_block img.background').css('left', s1imgMarg);
	}




	// height for s1 featured product text ad blocks
	var txtadHeight = $('.ad_block.spec_block').height();
	if (doc_width > 680) {
		if ($('.product_ads').hasClass('kryptek')) {

		} else {
			$('.ad_block.text_ad').css('height', txtadHeight);
		}
	}




	// height for featured product ad blocks
	var adHeight = $('.ad_block.awards_block').height();
	if (doc_width > 680) {
		$('.ad_block.spec_block').css('height', adHeight);
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

		// product slider mobile image margin
		var slider_mobile_marg = (((523 - doc_width) / 2) * -1);
		if (doc_width < 480) {
			$('#product_slider.flexslider .slides img').css('margin-left', slider_mobile_marg);
		} else {
			$('#product_slider.flexslider .slides img').css('margin-left', '0');
		}

		// smaller ad background image margin
		var small_ad_marg = (($('.ad_block.text_ad img').width() - $('.ad_block.text_ad').width()) / 2) * -1;
		if (small_ad_marg < 0) {
			$('.ad_block.text_ad img').css('margin-left', small_ad_marg);
		} else {
			$('.ad_block.text_ad img').css('margin-left', '0');
		}


		// trout net page header image margin
		if (doc_width < 2000) {
			var troutHeaderMarg = ((2000 - doc_width) / 2) * -1;
			$('img.header_bgd_img').css('left', troutHeaderMarg);
		} else {
			$('img.header_bgd_img').css('left', '0');
		}

		// featured product page header image margin
		if (doc_width < 1400) {
			prodHeaderMarg = ((1400 - doc_width) / 2) * -1;
			$('img.featured_prod').css('left', prodHeaderMarg);
		} else if (doc_width < 580) {
			prodHeaderMarg = ((810 - doc_width) / 2) * -1;
			$('img.featured_prod').css('left', prodHeaderMarg);
		} else {
			$('img.featured_prod').css('left', '0');
		}


		// s1 slider ad block image margin
		if (doc_width < 1040) {
			s1imgMarg = ((1062 - doc_width) / 2) * -1;
			$('img.backgrnd').css('left', s1imgMarg);
			$('.product_ads.kryptek .ad_block.awards_block img.background').css('left', s1imgMarg);
		} else {
			$('img.backgrnd').css('left', '0');
			$('.product_ads.kryptek .ad_block.awards_block img.background').css('left', '0');
		}




		// height for s1 featured product text ad blocks
		var txtadHeight = $('.ad_block.spec_block').height();
		if (doc_width > 680) {
			if ($('.product_ads').hasClass('kryptek')) {

			} else {
				$('.ad_block.text_ad').css('height', txtadHeight);
			}
		} else {
			$('.ad_block.text_ad').css('height', 'auto');
		}




		// height for featured product ad blocks
		var adHeight = $('.ad_block.awards_block').height();
		if (doc_width > 680) {
			$('.ad_block.spec_block').css('height', adHeight);
		} else {
			$('.ad_block.spec_block').css('height', 'auto');
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