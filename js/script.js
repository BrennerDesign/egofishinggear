var selectedFilters = [],
	insideSetTheFilters = false,
	replacementTab = 'bags',
	replacementSlider;

function showHideProducts(jqEl, fromHandler) {
	var scopedItem = jqEl.attr('id');
	if (jqEl.is(':checked')) {
		$('.product_specs.cards .product_card.' + scopedItem).fadeIn();

		if ($('.filter_block.replacement').length > 0) {
			$('.product_specs.cards .product_card:not(.' + scopedItem + ')').fadeOut();
		}
	} else {

		if ($('.filter_expand input[type=checkbox]').is(':checked')) {
			$('.product_specs.cards .product_card.' + scopedItem).fadeOut();
		} else {

			if ($('.filter_block.replacement').length > 0) {
				$('.product_specs.cards .product_card.bags').fadeIn();
				$('.product_specs.cards .product_card.hoop, .product_specs.cards .product_card.parts').fadeOut();
			} else {
				jqEl.closest('.filter_expand').removeClass('checked');
				$('.product_specs.cards .product_card').fadeIn();
			}
		}
	}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function updateSelectedFilters()
{
	var newFilters = [];
	$('.filter_expand .options input[type="checkbox"]:checked').each(function() {
		newFilters.push($(this).val())
	});

	selectedFilters = newFilters;
	if (! insideSetTheFilters) {
		pushTheFilters();
	}
}

function pushTheFilters()
{
	var url = window.location.pathname;
	if (selectedFilters.length > 0) {
		var url = window.location.pathname + '?filters=' + selectedFilters.join(',');
	}

	history.pushState(null, null, url);
}

function setTheFilters(isInitial)
{
	
	$('.filter_expand .options input[type="checkbox"]').each(function() {
		if ($(this).is(':checked')) {
			$(this).prop('checked', false);
		}
	});

	var filterClassTypes = ['length', 'size', 'type', 'bags'],
		filterClassTypesLength = filterClassTypes.length;

	var foundFilters = getParameterByName('filters');
	if (foundFilters == null) {
		$('.product_specs.cards .product_card').fadeIn();
	} else {
		$('.product_specs.cards .product_card').fadeOut();

		//need to find what section they belong to and expand those.
		var foundSelectedFilters = foundFilters.split(',');
		if (foundSelectedFilters.length > 0) {
			for (var i = 0; i < foundSelectedFilters.length; i++) {
				var name = foundSelectedFilters[i];
				$('.filter_expand input#' + name).prop('checked', true); //.trigger('click');
				showHideProducts($('.filter_expand input#' + name), false);

				// sets the classes for the selected filter
				$('.filter_expand.expanded').removeClass('expanded').css('display', 'none');
				var parentFilters = $('input#' + name).closest('.filter_expand'),
					currentClasses = parentFilters.attr('class');

				parentFilters.addClass('expanded').css('display', 'block');

				for (var x = 0; x < filterClassTypesLength; x++) {
					var classType = filterClassTypes[x];
					if (currentClasses) {
						if (currentClasses.indexOf(classType) !== -1) {
							$('.filter_title.' + classType + ' .selected_box').addClass('selected').css('display', 'block');
						} else {
							$('.filter_title.' + classType + ' .selected_box.selected').removeClass('selected').css('display', 'none');
						}
					} else {
					}
				}
				
			}
		}
	}

	

}

window.addEventListener('popstate', function(e) {

	if ($('.filter_block.replacement').length > 0) {
		$('.filter_title.' + replacementTab).trigger('click');
	} else {
		setTheFilters();
	}
	
});

$(document).ready(function() {

	setTheFilters(true);

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
	replacementSlider = $('.replacement_slider').flexslider({
		animation: "fade",
		animationLoop: true,
		controlNav: false,
		directionNav: true,
		slideshow: false,
		animationSpeed: 800,
		allowOneSlide: true
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
				}, 0);
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
				}, 0, function() {
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
			selectedFilters = [];
			pushTheFilters();

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
			selectedFilters = [];
			pushTheFilters();

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
			selectedFilters = [];
			pushTheFilters();

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
		replacementTab = 'hoop';
		if ($(this).find('.selected_box').hasClass("selected")) {

		} else {
			$('.product_specs.cards .product_card.bags, .product_specs.cards .product_card.parts').fadeOut();
        	$('.product_specs.cards .product_card.hoop').fadeIn();
			$('.filter_expand.expanded').slideUp(200, function() {
			    $(this).removeClass("expanded");
			})
			$('.selected_box.selected').removeClass("selected");
			$(this).find('.selected_box').delay(10).addClass("selected");
			replacementSlider.resize();
		}
	});

	$('.filter_title.parts').click(function(e) {
		e.preventDefault();
		replacementTab = 'parts';
		if ($(this).find('.selected_box').hasClass("selected")) {

		} else {
			$('.product_specs.cards .product_card.hoop, .product_specs.cards .product_card.bags').fadeOut();
        	$('.product_specs.cards .product_card.parts').fadeIn();
        	selectedFilters = [];
			pushTheFilters();
			$('.filter_expand.expanded').slideUp(200, function() {
			    $(this).removeClass("expanded");
			})
			$('.selected_box.selected').removeClass("selected");
			$(this).find('.selected_box').delay(10).addClass("selected");
			replacementSlider.resize();
		}
	});

	$('.filter_title.bags').click(function(e) {
		e.preventDefault();
		replacementTab = 'bags';
		if ($(this).find('.selected_box').hasClass("selected")) {

		} else {
			$('.product_specs.cards .product_card.hoop, .product_specs.cards .product_card.parts').fadeOut();
        	$('.product_specs.cards .product_card.bags').fadeIn();
			$('.filter_expand.bags').slideDown(200, function() {
		      	$(this).addClass("expanded");
			})
			$('.selected_box.selected').removeClass("selected");
			$(this).find('.selected_box').delay(10).addClass("selected");
			replacementSlider.resize();
		}
	});

	setTimeout(function() {
		$('.product_specs.cards .product_card.hoop, .product_specs.cards .product_card.parts').fadeOut();
	}, 2000);
	



	// click filter buttons
	$('.filter_expand input').click(function() {
		var parent = $(this).closest('.filter_expand');
		if (parent.hasClass("checked")) {
		} else {
			parent.addClass("checked");
			$('.product_specs.cards .product_card').fadeOut();
		}
	});


	$('.filter_expand .options input[type="checkbox"]').each(function() {
		var item = $(this).attr('id');

		if ($('.filter_expand input#' + item).is(':checked')) {
			$('.product_specs.cards .product_card.' + item).fadeIn();
		}

		$('.filter_expand input#' + item).click(function() {
			showHideProducts($(this), true);

			updateSelectedFilters();
		});
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
		$('img.header_bgd_img.about').css('left', '0');
	} else {
		$('img.header_bgd_img').css('left', '0');
	}

	// about headers
		$('img.header_bgd_img.about').parent().css('width', '1160px').css('max-width', '100%').css('margin', '0 auto').css('overflow', 'hidden').css('top', '-6px');

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

	function scrollPos() {
		$.scrollTo($('.expanded'),'slow', {
			offset: -150
		});
	}
	








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

	$('.top_nav_bar ul').bind("click touchstart", function() {
		if (doc_width > 980) {
			hideList();
		} else {

		}
   });

	$('.menu-top_nav-container a').bind("click touchstart", function(e) {
		e.stopPropagation();
	});



	var initial_size = $(window).width(),
		previous_size = initial_size;


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
			$('img.header_bgd_img.about').css('left', '0');
		} else {
			$('img.header_bgd_img').css('left', '0');
		}


		// about headers
		$('img.header_bgd_img.about').parent().css('width', '1160px').css('max-width', '100%').css('margin', '0 auto').css('overflow', 'hidden').css('top', '-6px');


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
		} else {
			if (doc_width != previous_size) {
				$('.sub-menu').css('top', '0');
				$('.top_nav_bar a.has_sub_menu').next().css('display', 'none');
				$('.top_nav_bar .sub_nav_link').css('display', 'block').css('border-bottom', '2px solid #c4c4c4');
			} else {
				//debugging code here
			}
		}
		

		previous_size = doc_width;
	});
  
});