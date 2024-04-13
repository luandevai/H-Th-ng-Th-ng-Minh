(function($) {
	
	"use strict";
	
	// button animation
	$(function() {  
		$('.btn-1')
		.on('mouseenter', function(e) {
				var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
				$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
				var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});
	});
	// button animation


	// nice select
	$(document).ready(function() {
		$('select:not(.ignore)').niceSelect();
	});
	// nice select
	
	// magnifipopup video
	$(document).ready(function() {
		$('.video-popup-link').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	});
	// magnifipopup video

	// Fancybox carousel section start
    // Initialise Carousel
	if($(".fancybox-carousel-section").length){
		const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
			Dots: false,
		});
	
		// Thumbnails
		const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
			Sync: {
				target: mainCarousel,
				friction: 0,
			},
			Dots: false,
			Navigation: false,
			center: true,
			slidesPerPage: 1,
			infinite: true,
		});
	
		// Customize Fancybox
		Fancybox.bind('[data-fancybox="gallery"]', {
			Carousel: {
				on: {
					change: (that) => {
						mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
							friction: 0,
						});
					},
				},
			},
		});
	}
	// Fancybox carousel section end


	// about parollar
	$('[data-paroller-factor]').paroller();
	$('.paroller').paroller({
		factor: 0.1,
		factorXs: 0.3,
		// direction: 'horizontal',
		transition: 'transform 2s ease-out',
		type: 'foreground',
	});
	// about parollar


	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
		TweenMax.to($(".loader-wrap .overlay"), 1.2, {
            force3D: true,
            left: "100%",
            ease: Expo.easeInOut,
        });
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }

    function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split('/').reverse()[0];

        selector.find('li').each(function () {
            let anchor = $(this).find('a');
            if ($(anchor).attr('href') == FileName) {
                $(this).addClass('current');
            }
        });
        // if any li has .current elmnt add class
        selector.children('li').each(function () {
            if ($(this).find('.current').length) {
                $(this).addClass('current');
            }
        });
        // if no file name return 
        if ('' == FileName) {
            selector.find('li').eq(0).addClass('current');
        }
    }


    // dynamic current class        
    let mainNavUL = $('.main-menu').find('.navigation');
    dynamicCurrentMenuClass(mainNavUL);
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
	}


	//Mobile Nav Hide Show
	if($('.mobile-menu').length){		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
			$(this).prev('.mega_menu').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});
		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn,.scroll-nav li a').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	//Sidemenu Nav Hide Show
	if($('.side-menu').length){		
		//Dropdown Button
		$('.side-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		$('body').addClass('side-menu-visible');
		//Menu Toggle Btn
		$('.side-nav-toggler').on('click', function() {
			$('body').addClass('side-menu-visible');
		});
		//Menu Toggle Btn
		$('.side-menu .side-menu-resize').on('click', function() {
			$('body').toggleClass('side-menu-visible');
		});
		//Menu Toggle Btn
		$('.main-header .mobile-nav-toggler-two').on('click', function() {
			$('body').addClass('side-menu-visible-s2');
		});
		//Menu Overlay
		$('.main-header .side-menu-overlay').on('click', function() {
			$('body').removeClass('side-menu-visible-s2');
		});
	}
	


	//Search Popup
	if($('#search-popup').length){		
		//Show Popup
		$('.search-toggler').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}
	//Search Popup



	// banner slide
	function bannerSlider() {
		// banner slide 01
		if ($(".banner-slider-1").length > 0) {
		    // Banner Slider
			var bannerSlider2 = new Swiper('.banner-slider-1', {
				preloadImages: false,
                loop: true,
                grabCursor: true,
                centeredSlides: false,
                resistance: true,
                resistanceRatio: 0.6,
                speed: 2400,
                spaceBetween: 0,
                parallax: false,
                effect: "fade",
				autoplay: {
				    delay: 8000,
                    disableOnInteraction: false
				},
				pagination: {
				el: '.slider__pagination',
				clickable: true,
			  	},
	            navigation: {
	                nextEl: '.banner-slider-button-next',
	                prevEl: '.banner-slider-button-prev',
	            },
			});
		}
	}
	// banner slide 


	if ($('.theme_carousel').length) {
		$(".theme_carousel").each(function (index) {
			var $owlAttr = {},
			$extraAttr = $(this).data("options");
			$.extend($owlAttr, $extraAttr);
			$(this).owlCarousel($owlAttr);
		});
	}
	

	// Single item Carousel 
	if ($('.single-item-carousel').length) {
		var singleItemCarousel = new Swiper('.single-item-carousel', {
			preloadImages: false,
			loop: true,
			grabCursor: true,
			centeredSlides: false,
			resistance: true,
			resistanceRatio: 0.6,
			speed: 1400,
			spaceBetween: 0,
			parallax: false,
			effect: "slide",
			pagination: {
				el: '.slider__pagination',
				clickable: true,
			  },
			//   pagination: {
			// 	el: '.slider__pagination2',
			// 	clickable: true,
			// },
			autoplay: {
				delay: 8000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev',
			},
		});
	}


	// five item carousel
	if ($('.add-carousel').length) {
		var twoItemCarousel = new Swiper('.add-carousel', {
			preloadImages: false,
			loop: true,
			grabCursor: true,
			centeredSlides: false,
			resistance: true,
			resistanceRatio: 0.6,
			slidesPerView: 5,
			speed: 1400,
			spaceBetween: 0,
			parallax: false,
			effect: "slide",
			active: 'active',
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.slider__pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.slider_button_prev6',
				nextEl: '.slider_button_next6',
			},
			breakpoints: {
				1400: {
					slidesPerView: 4,
				},
                991: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 1,
                }, 
            }
		});
	}


	// testimonial 1 swipper
	var TrandingSlider = new Swiper(".testimonial-slider", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		slidesPerView: "auto",
		coverflowEffect: {
		  rotate: 0,
		  stretch: 0,
		//   depth: 100,
		//   modifier: 2.5,
		},
		pagination:{
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		},
	  });
	// testimonial 1 swipper


	// six item carousel
	if ($('.six-item-carousel').length) {
		var twoItemCarousel = new Swiper('.six-item-carousel', {
			preloadImages: false,
			loop: true,
			grabCursor: true,
			centeredSlides: false,
			resistance: true,
			resistanceRatio: 0.6,
			slidesPerView: 6,
			speed: 1400,
			spaceBetween: 0,
			parallax: false,
			effect: "slide",
			active: 'active',
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.slider__pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.slider_button_prev6',
				nextEl: '.slider_button_next6',
			},
			breakpoints: {
				1400: {
					slidesPerView: 4,
				},
                991: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 1,
                }, 
            }
		});
	}

	// three-item-carousel
	if ($('.three-item-carousel').length) {
		var twoItemCarousel = new Swiper('.three-item-carousel', {
			preloadImages: false,
			loop: true,
			grabCursor: true,
			centeredSlides: false,
			resistance: true,
			resistanceRatio: 0.6,
			slidesPerView: 3,
			speed: 1400,
			spaceBetween: 30,
			parallax: false,
			effect: "slide",
			active: 'active',
			autoplay: {
				delay: 5000,
				disableOnInteraction: true
			},
			pagination: {
				el: '.slider__pagination3',
				clickable: true,
			},
			navigation: {
				nextEl: '.slider-button-next3',
				prevEl: '.slider-button-prev3',
			},
			noSwiping: true,
        	noSwipingClass: "no-swipe",
			breakpoints: {
				1400: {
					slidesPerView: 3,
				},
                991: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 1,
                }, 
            }
		});
	}
	// three-item-carousel
	

	//Progress Bar / Levels
	if ($('.progress-box .bar-fill').length) {
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width', progressWidth + '%');
			$(this).children('.percent').html(progressWidth + '%');
		});
	}

	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
		});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	

	//Scrollbar
	$('.scroll-top-inner').on("click", function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
    function handleScrollbar() {
        var progressLineBar = $('.scroll-top-inner .bar-inner');
        var pageHeight = $(document).height();
        var windwoHeight = $(window).height();
        var windowPos = $(window).scrollTop();
        var progressLineBarWidth = windowPos / (pageHeight - windwoHeight) * 100;
        $(progressLineBar).css('width',(progressLineBarWidth + '%'));
    }
	$(window).on('scroll', function() {
		handleScrollbar();
		if ($(window).scrollTop() > 200) {
				$('.scroll-top-inner').addClass('visible');
			} else {
				$('.scroll-top-inner').removeClass('visible');
			}
	});

	// progress
	if($('.prgoress_indicator path').length){
		var progressPath = document.querySelector('.prgoress_indicator path');
		var pathLength = progressPath.getTotalLength();
		
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
		  var scroll = $(window).scrollTop();
		  var height = $(document).height() - $(window).height();
		  var progress = pathLength - (scroll * pathLength / height);
		  progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).on('scroll', updateProgress);
		var offset = 250;
		var duration = 550;
		jQuery(window).on('scroll', function () {
		  if (jQuery(this).scrollTop() > offset) {
			jQuery('.prgoress_indicator').addClass('active-progress');
		  } else {
			jQuery('.prgoress_indicator').removeClass('active-progress');
		  }
		});
		jQuery('.prgoress_indicator').on('click', function (event) {
		  event.preventDefault();
		  jQuery('html, body').animate({ scrollTop: 0 }, duration);
		  return false;
		});
		
		}
		// progress



	// ajax form
	if ($('.ajax-sub-form').length > 0) {
	    $('.ajax-sub-form').ajaxChimp({
	          language: 'es',
	          url: "https://gmail.us17.list-manage.com/subscribe/post?u=8a43765a655b07d21fa500e4e&amp;id=2eda0a58a7" //Replace this with your mailchimp post URL.
	    });
	    $.ajaxChimp.translations.es = {
	        'submit': 'Submitting...',
	        0: 'Thanks for your subscription',
	        1: 'Please enter a valid email',
	        2: 'An email address must contain a single @',
	        3: 'The domain portion of the email address is invalid (the portion after the @: )',
	        4: 'The username portion of the email address is invalid (the portion before the @: )',
	        5: 'This email address looks fake or invalid. Please enter a real email address'
	    };
	}
	// ajax form

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();

	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		bannerSlider();	
	});	





})(window.jQuery);

