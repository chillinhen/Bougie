/**
 * Class and function collection for client Bougie Immobilien GmbH.
 * 
 * @author      Kevin Roderburg <k.roderburg@werbecafe.de>
 * @copyright   2015 WerbeCafé
 * @package			Bougie
 */

/**
 * Initialize Bougie namespace
 */
var Bougie = {};

/**
 * General website related functions
 */
Bougie.Base = {
	/**
	 * Initializes dynamic functionality
	 */
	init: function()
	{
		this.enableButtonCollapse();
		this.enableParallax();
		this.setBodyClass();
		
		if(!$('body').hasClass('mobile'))
		{
			this.switchImages();
		}
	},
	
	/**
	 * function buttonCollapse()
	 * a function to slide in the side navigation
	 */
	enableButtonCollapse: function() {
		$('.button-collapse').sideNav();
	},
	
  /**
   * function enableParallax()
   * a function to active materialize parallax
   */
   enableParallax: function()
   {
     $('.parallax').parallax();
   },
   
   /**
	  * function switchImages()
	  * switch a smaller image as background-image when it is on mobile devices
	  *
	  */
   switchImages: function()
   {
	   // get window width
	   var width = window.innerWidth;
	   
	   var parallaxContainer = $('div.parallax-container');
	   
	   parallaxContainer.each(function() {
	   
		   // get the path of the image for common devices
		   var singleSRC = $(this).children('div.parallax').find('img').attr('src');
		   
		   // get the path of the image for mobile device
		   var mobileSRC = $(this).find('img.mobile').attr('src');
			 			 
		   // initialize the image // 992 old value
		   if(width <= 1024)
		   {
			   // give body a class
			   $('body').addClass('mobile-device');
			   
			   if(mobileSRC !== undefined)
			   {
				  $(this).children('div.parallax').css('background-image', 'url(' + mobileSRC + ')').css('background-size', 'cover');
			   }
		   }
		   
		   if(width > 1024)
		   {
			   $('body').removeClass('mobile-device');
			   
			   var hasBackgroundImage = $(this).children('div.parallax').attr('style');
			   
			   if(hasBackgroundImage !== undefined)
			   {
				   $(this).children('div.parallax').removeAttr('style');
			   }
		   }
	   });
	   
	   // check resize window
	   $(window).resize(function() {
		   width = window.innerWidth;
			 
		   parallaxContainer.each(function() {
		   
			   // get the path of the image for common devices
			   var singleSRC = $(this).children('div.parallax').find('img').attr('src');
			   
			   // get the path of the image for mobile device
			   var mobileSRC = $(this).find('img.mobile').attr('src');
				 
			   // initialize the image // 992 old value
			   if(width <= 1024)
			   {
				   $('body').addClass('mobile-device');
				   
				   if(mobileSRC !== undefined)
				   {
					  $(this).children('div.parallax').css('background-image', 'url("' + mobileSRC + '")').css('background-size', 'cover'); 
				   }
			   }
			   
			   if(width > 1024)
			   {
				   $('body').removeClass('mobile-device');
				   
				   var hasBackgroundImage = $(this).children('div.parallax').attr('style');
				   
				   if(hasBackgroundImage !== undefined)
				   {
					   $(this).children('div.parallax').removeAttr('style');
				   }
			   }
		   });
	   });
   },
   
   setBodyClass: function() {
	   // get window width
	   var width = window.innerWidth;
	   
	   // initialize the image // 992 old value
	   if(width <= 1024)
	   {
		   // give body a class
		   $('body').addClass('mobile-device');
	   }
	   
	   if(width > 1024)
	   {
		   $('body').removeClass('mobile-device');
	   }
	   
	   // check resize window
	   $(window).resize(function() {
		   width = window.innerWidth;
			 
		   // initialize the image // 992 old value
		   if(width <= 1024)
		   {
			   $('body').addClass('mobile-device');
		   }
		   
		   if(width > 1024)
		   {
			   $('body').removeClass('mobile-device');
		   }
	   }); 
   }
}

Bougie.immoList = {
	init: function()
	{
		if(!$('body').hasClass('mobile') && !$('body').hasClass('mobile-device'))
		{
			this.enableScrollDown();
			//this.delayedSliding();	
		}
	},
	
	/**
	 * enableScrollDown()
	 * enables scroll down button for scrolling down the height of one window
	 */	
	enableScrollDown: function()
	{
		// get window height
		var height = 833;
		
		// get scroll down button
		var scrollDownButton = $("div.immoMap div.container.arrow a.scrollDown");
		
		scrollDownButton.on("click", function() {
			$("body,html").stop().animate({
				scrollTop: height
			}, 2000);
		});	
	},
	
	/**
	 * delayedSliding()
	 * slide down after a certain time
	 */
	delayedSliding: function()
	{
		var height = 833;
		
		var scroll = true;
		
		$( window ).scroll(function() {
		  scroll = false;
		});
		
		window.setTimeout(function() {
			if(scroll){
				$('body,html').animate({
					scrollTop: height
				}, 2000);	
			}
    }, 2000);
	}
}

Bougie.immoDetails = {
	init: function()
	{
		this.enableFancyBox();
		this.enableGallery();
		this.scrollToAnchor();
	},
	
	enableFancyBox: function()
	{
		$('a[data-lightbox]').fancybox({
			margin: 	0,
			padding: 	0,
		});
	},
	
	enableGallery: function()
	{
		var objDefaultOptions = {
			adaptiveHeight: false,
			auto: true,
			controls: true,
			mode: 'fade',
			nextText: '<i class="fa fa-chevron-circle-right"></i>',
			pause: 5000,
			prevText: '<i class="fa fa-chevron-circle-left"></i>',
			slideSelector: 'div.image',
			speed: 1000
		};
		
		var gallery = $('div.gallery-slider div.container');
		
		gallery.bxSlider(objDefaultOptions);
	},
	
	scrollToAnchor: function()
	{
		var immoNav = $('div.immo-details div.immo-navigation');
		
		immoNav.children('a.scroll').each(function() {			
			$(this).click(function(e) {
				var anchorName = $(this).attr('href');
				var anchorPosition = $(anchorName).offset().top - 64;
				
				$('body,html').stop().animate({
					scrollTop: anchorPosition
				}, 1000);
				
				e.preventDefault();
			});
		});
	}
}

Bougie.Preload = {
	init: function()
	{
		this.preloadImages();
	},
	
	preloadImages: function()
	{
		$('body').queryLoader2({
			backgroundColor: '#354a73',
			percentage: true
		});
	}
}