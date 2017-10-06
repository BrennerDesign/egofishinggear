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


	// flex slider - replacement parts sliders
	$('.replacement_slider').flexslider({
		animation: "slide",
		animationLoop: true,
		controlNav: false,
		directionNav: true,
		slideshow: false,
		animationSpeed: 800
	});








	// video popup initialization
	$('.play_btn').magnificPopup({
	  	type: 'iframe',
	  	// other options
		iframe: {
			patterns: {
				youtube: {
				  	index: 'youtube.com/',
				  	id: 'v=',
				  	src: 'h%id%?autoplay=1' // URL that will be set as a source for iframe.
				}
			},
		    srcAction: 'iframe_src',
		}
	});
	

	
	


	// main nav hover
	$('.sub_nav_link').hoverIntent(function() {
		if ($(this).hasClass('active')) {
		} else {
			if (doc_width > 980) {
				$(this).find('.sub-menu-cont').css('display', 'block');
				$(this).find('.hover_bar').css('background-color', '#CC1015');
				$(this).find('.sub-menu').animate({
					top: 0
				}, 400);
			} else {

			}
		}
	}, function () {
		if ($(this).hasClass('active')) {
		} else {
			if (doc_width > 980) {
				$(this).find('.hover_bar').css('background-color', 'transparent');
				$(this).find('.sub-menu').animate({
					top: -300
				}, 400, function() {
					$(this).parent().css('display', 'none');
				});
			} else {

			}
		}
	});




	// filter expand / select
	$('.selected_box.selected').click(function(e) {
		e.preventDefault();
		if ($(this).parent().hasClass("bags")) {

		} else {
			$('.filter_expand.expanded').slideUp(200, function() {
			      $(this).removeClass("expanded");
			})
			$(this).delay(230).fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
		}
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
			      $(this).removeClass("checked");
			})
			$('.selected_box.selected').fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
			$('.filter_expand input[type=checkbox]').prop('checked', false); // Unchecks it
			$('.product_specs.cards .product_card').fadeIn(); // fade all cards back in

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
			      $(this).removeClass("checked");
			})
			$('.selected_box.selected').fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
			$('.filter_expand input[type=checkbox]').prop('checked', false); // Unchecks it
			$('.product_specs.cards .product_card').fadeIn(); // fade all cards back in

			$('.filter_expand.size').slideDown(200, function() {
		      	$(this).addClass("expanded");
			})
			$(this).find('.selected_box').delay(230).fadeIn(120, function() {
		      	$(this).addClass("selected");
			})
		};
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
			      $(this).removeClass("checked");
			})
			$('.selected_box.selected').fadeOut(120, function() {
			      $(this).removeClass("selected");
			})
			$('.filter_expand input[type=checkbox]').prop('checked', false); // Unchecks it
			$('.product_specs.cards .product_card').fadeIn(); // fade all cards back in

			$('.filter_expand.type').slideDown(200, function() {
		      	$(this).addClass("expanded");
			})
			$(this).find('.selected_box').delay(230).fadeIn(120, function() {
		      	$(this).addClass("selected");
			})
		};
	});


	$('.filter_title.hoop').click(function(e) {
		e.preventDefault();
		if ($(this).find('.selected_box').hasClass("selected")) {

		} else {
			$('.product_specs.cards .product_card.bags, .product_specs.cards .product_card.parts').fadeOut();
        	$('.product_specs.cards .product_card.hoop').fadeIn();
			$('.filter_expand.expanded').slideUp(200, function() {
			    $(this).removeClass("expanded");
			})
			$('.selected_box.selected').removeClass("selected");
			$(this).find('.selected_box').delay(10).addClass("selected");
		}
	});

	$('.filter_title.parts').click(function(e) {
		e.preventDefault();
		if ($(this).find('.selected_box').hasClass("selected")) {

		} else {
			$('.product_specs.cards .product_card.hoop, .product_specs.cards .product_card.bags').fadeOut();
        	$('.product_specs.cards .product_card.parts').fadeIn();
			$('.filter_expand.expanded').slideUp(200, function() {
			    $(this).removeClass("expanded");
			})
			$('.selected_box.selected').removeClass("selected");
			$(this).find('.selected_box').delay(10).addClass("selected");
		}
	});

	$('.filter_title.bags').click(function(e) {
		e.preventDefault();
		if ($(this).find('.selected_box').hasClass("selected")) {

		} else {
			$('.product_specs.cards .product_card.hoop, .product_specs.cards .product_card.parts').fadeOut();
        	$('.product_specs.cards .product_card.bags').fadeIn();
			$('.filter_expand.bags').slideDown(200, function() {
		      	$(this).addClass("expanded");
			})
			$('.selected_box.selected').removeClass("selected");
			$(this).find('.selected_box').delay(10).addClass("selected");
		}
	});

	$('.product_specs.cards .product_card.hoop, .product_specs.cards .product_card.parts').fadeOut();






	// click filter buttons
	$('.filter_expand input').click(function() {
		if ($('.filter_expand').hasClass("checked")) {

		} else {
			$('.product_specs.cards .product_card').fadeOut();
		}
	});






	// if filter option is selected - size
	if ($('.filter_expand input#compact_opt').is(':checked')) {
		$('.product_specs.cards .product_card.compact').fadeIn();
	}

	if ($('.filter_expand input#standard_opt').is(':checked')) {
		$('.product_specs.cards .product_card.standard').fadeIn();
	}

	if ($('.filter_expand input#reach_opt').is(':checked')) {
		$('.product_specs.cards .product_card.reach').fadeIn();
	}



	if ($('.filter_expand input#wade_opt').is(':checked')) {
		$('.product_specs.cards .product_card.wade').fadeIn();
	}

	if ($('.filter_expand input#sml_opt').is(':checked')) {
		$('.product_specs.cards .product_card.sml').fadeIn();
	}

	if ($('.filter_expand input#med_opt').is(':checked')) {
		$('.product_specs.cards .product_card.med').fadeIn();
	}
	if ($('.filter_expand input#lrg_opt').is(':checked')) {
		$('.product_specs.cards .product_card.lrg').fadeIn();
	}

	if ($('.filter_expand input#xlong_opt').is(':checked')) {
		$('.product_specs.cards .product_card.xlong').fadeIn();
	}





	// if filter option is selected - length
	if ($('.filter_expand input#small_opt').is(':checked')) {
		$('.product_specs.cards .product_card.small').fadeIn();
	}

	if ($('.filter_expand input#medium_opt').is(':checked')) {
		$('.product_specs.cards .product_card.medium').fadeIn();
	}

	if ($('.filter_expand input#large_opt').is(':checked')) {
		$('.product_specs.cards .product_card.large').fadeIn();
	}

	if ($('.filter_expand input#large_opt22').is(':checked')) {
		$('.product_specs.cards .product_card.large22').fadeIn();
	}

	if ($('.filter_expand input#xlarge_opt').is(':checked')) {
		$('.product_specs.cards .product_card.xlarge').fadeIn();
	}




	// if filter option is selected - type
	if ($('.filter_expand input#nylon_opt').is(':checked')) {
		$('.product_specs.cards .product_card.nylon').fadeIn();
	}

	if ($('.filter_expand input#rubber_coated_nylon_opt').is(':checked')) {
		$('.product_specs.cards .product_card.rubber_coated_nylon').fadeIn();
	}

	if ($('.filter_expand input#pvc_coated_nylon_opt').is(':checked')) {
		$('.product_specs.cards .product_card.pvc_coated_nylon').fadeIn();
	}

	if ($('.filter_expand input#rubber_opt').is(':checked')) {
		$('.product_specs.cards .product_card.rubber').fadeIn();
	}

	if ($('.filter_expand input#clear_rubber_opt').is(':checked')) {
		$('.product_specs.cards .product_card.clear_rubber').fadeIn();
	}

	if ($('.filter_expand input#deep_rubber_opt').is(':checked')) {
		$('.product_specs.cards .product_card.deep_rubber').fadeIn();
	}

	if ($('.filter_expand input#measure_net_opt').is(':checked')) {
		$('.product_specs.cards .product_card.measure_net').fadeIn();
	}





	// universal when clicked on - length





	// if filter option is clicked on - length
	$('.filter_expand input#compact_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.compact').fadeIn();
			$('.filter_expand.length').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.compact').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.length').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#standard_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.standard').fadeIn();
			$('.filter_expand.length').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.standard').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.length').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#reach_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.reach').fadeIn();
			$('.filter_expand.length').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.reach').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.length').removeClass('checked');
			}
		}
	});





	$('.filter_expand input#wade_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.wade').fadeIn();
			$('.filter_expand.length').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.wade').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.length').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#sml_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.sml').fadeIn();
			$('.filter_expand.length').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.sml').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.length').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#med_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.med').fadeIn();
			$('.filter_expand.length').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.med').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.length').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#lrg_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.lrg').fadeIn();
			$('.filter_expand.length').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.lrg').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.length').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#xlong_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.xlong').fadeIn();
			$('.filter_expand.length').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.xlong').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.length').removeClass('checked');
			}
		}
	});




	// if filter option is clicked on - size
	$('.filter_expand input#small_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.small').fadeIn();
			$('.filter_expand.size').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.small').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.size').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#medium_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.medium').fadeIn();
			$('.filter_expand.size').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.medium').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.size').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#large_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.large').fadeIn();
			$('.filter_expand.size').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.large').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.size').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#large_opt22').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.large22').fadeIn();
			$('.filter_expand.size').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.large22').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.size').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#xlarge_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.xlarge').fadeIn();
			$('.filter_expand.size').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.xlarge').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.size').removeClass('checked');
			}
		}
	});





	// if filter option is clicked on - type
	$('.filter_expand input#nylon_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.nylon').fadeIn();
			$('.filter_expand.type').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.nylon').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.type').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#rubber_coated_nylon_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.rubber_coated_nylon').fadeIn();
			$('.filter_expand.type').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.rubber_coated_nylon').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.type').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#pvc_coated_nylon_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.pvc_coated_nylon_opt').fadeIn();
			$('.filter_expand.type').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.pvc_coated_nylon_opt').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.type').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#rubber_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.rubber_opt').fadeIn();
			$('.filter_expand.type').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.rubber_opt').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.type').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#clear_rubber_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.clear_rubber_opt').fadeIn();
			$('.filter_expand.type').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.clear_rubber_opt').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.type').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#deep_rubber_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.deep_rubber_opt').fadeIn();
			$('.filter_expand.type').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.deep_rubber_opt').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.type').removeClass('checked');
			}
		}
	});
	$('.filter_expand input#measure_net_opt').click(function() {
		if ($(this).is(':checked')) {
			$('.product_specs.cards .product_card.measure_net_opt').fadeIn();
			$('.filter_expand.type').addClass('checked');
		} else {
			if ($('.filter_expand input[type=checkbox]').is(':checked')) {
				$('.product_specs.cards .product_card.measure_net_opt').fadeOut();
			} else {
				$('.product_specs.cards .product_card').fadeIn();
				$('.filter_expand, .filter_expand.type').removeClass('checked');
			}
		}
	});









	// main nav height for mobile
	if (doc_width < 980) {
		$('.top_nav_bar ul.main_menu').css('height', total_doc_height);
	}

	// product slider mobile image margin
	var slider_mobile_marg = (((523 - doc_width) / 2) * -1);
	/* if (doc_width < 480) {
		$('#product_slider.flexslider .slides > li > img').css('margin-left', slider_mobile_marg);
	} */


	// smaller ad background image margin
	var small_ad_marg = (($('.ad_block.text_ad img').width() - $('.ad_block.text_ad').width()) / 2) * -1;
	if (small_ad_marg < 0) {
		if ($('.product_ads').hasClass('home')) {

		} else {
			$('.ad_block.text_ad img').css('margin-left', small_ad_marg);
		}
	}


	// trout net page header image margin
	if (doc_width < 2000) {
		var troutHeaderMarg = ((2000 - doc_width) / 2) * -1;
		$('img.header_bgd_img').css('left', troutHeaderMarg);
	} else {
		$('img.header_bgd_img').css('left', '0');
	}

	// about headers
	$('img.header_bgd_img.about').parent().css('width', '1160px').css('max-width', '100%').css('margin', '0 auto').css('overflow', 'hidden').css('top', '-6px');
	$('img.header_bgd_img.about').css('left', '50%').css('margin-left', '-1000px');



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
	var s1imgMarg = ((1200 - 1160) / 2) * -1;
	if (doc_width < 1160) {
		s1imgMarg = ((1200 - doc_width) / 2) * -1;
		$('img.backgrnd').css('left', s1imgMarg);
		$('.product_ads.kryptek .ad_block.awards_block img.background').css('left', s1imgMarg);
	} else {
		$('img.backgrnd').css('left', s1imgMarg);
	}




	// height for s1 featured product text ad blocks
	var txtadHeight = $('.ad_block.spec_block').height();
	if (doc_width > 680) {
		if ($('.product_ads').hasClass('kryptek')) {

		} else {
			if (txtadHeight > 0) {
				$('.ad_block.text_ad').css('height', txtadHeight);
			}
		}
	}




	// height for featured product ad blocks
	var adHeight = $('.ad_block.awards_block').height();
	if (doc_width > 680) {
		if (adHeight > 0) {
			$('.ad_block.text_ad').css('height', adHeight);
		}
	}



	// subnav submenu button clicks
	$('.top_nav_bar a.has_sub_menu').click(function(e) {
		e.preventDefault();
		if (doc_width < 980) {
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






	// determine dragging on mobile nav
	var dragging = 0;

	$('.mobile_nav').mousedown(function() {
	    $(document).mousemove(function(){
	       dragging = 1;
	    });
	});

	$(document).mouseup(function(){
	    dragging = 0;
	    $(document).unbind('mousemove');
	});


	








	// mobile nav click
	$('.mobile_nav').click(function(e) {
		e.preventDefault();
		// if clicking and not dragging/scrolling on mobile nav
		if (dragging == 0) {
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

	$('.top_nav_bar ul').click(function(e) {
		if (doc_width > 980) {
			hideList();
		} else {

		}
   });

	$('.menu-top_nav-container a').click(function(e) {
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
		/* if (doc_width < 480) {
			$('#product_slider.flexslider .slides > li > img').css('margin-left', slider_mobile_marg);
		} else {
			$('#product_slider.flexslider .slides > li > img').css('margin-left', '0');
		} */

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


		// about headers
		$('img.header_bgd_img.about').parent().css('width', '1160px').css('max-width', '100%').css('margin', '0 auto').css('overflow', 'hidden').css('top', '-6px');
		$('img.header_bgd_img.about').css('left', '50%').css('margin-left', '-1000px');



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
		var s1imgMarg = ((1200 - 1160) / 2) * -1;
		if (doc_width < 1160) {
			s1imgMarg = ((1200 - doc_width) / 2) * -1;
			$('img.backgrnd').css('left', s1imgMarg);
			$('.product_ads.kryptek .ad_block.awards_block img.background').css('left', s1imgMarg);
		} else {
			$('img.backgrnd').css('left', s1imgMarg);
			$('.product_ads.kryptek .ad_block.awards_block img.background').css('left', '0');
		}




		// height for s1 featured product text ad blocks
		var txtadHeight = $('.ad_block.spec_block').height();
		if (doc_width > 680) {
			if ($('.product_ads').hasClass('kryptek')) {

			} else {
				if (txtadHeight > 0) {
					$('.ad_block.text_ad').css('height', txtadHeight);
				}
			}
		} else {
			$('.ad_block.text_ad').css('height', 'auto');
		}




		// height for featured product ad blocks
		var adHeight = $('.ad_block.awards_block').height();
		if (doc_width > 680) {
			if (adHeight > 0) {
				$('.ad_block.text_ad').css('height', adHeight);
			}
		} else {
			$('.ad_block.spec_block').css('height', 'auto');
		}
		


		// main nav reset		
		if (doc_width > 980) {
			$('.hover_bar').css('background-color', 'transparent');
			$('.sub-menu').css('top', '-300px');
			$('.sub-menu-cont').css('display', 'none');
			$('.top_nav_bar .sub_nav_link').css('display', 'inline-block').css('border-bottom', 'none');
			$('.top_nav_bar a.has_sub_menu').removeClass('expanded');
			$('.top_nav_bar a.has_sub_menu').next().css('display', 'block');
		} else {
			$('.sub-menu').css('top', '0');
			$('.top_nav_bar a.has_sub_menu').next().css('display', 'none');
			$('.top_nav_bar .sub_nav_link').css('display', 'block').css('border-bottom', '2px solid #c4c4c4');
		}


		


	});
  
});