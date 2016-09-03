(function ($, root, undefined) {

    $(function () {
        
        //more infos
        $('a').each(function () {
            var moreLink = $(this).attr('title');
            if (moreLink == "more-infos") {
                $(this).addClass('more-link');
            }
        });
        
        // Text/ Team Teaser
        $('.text-teaser h3').wrapInner('<span></span>');
        $('.team-teaser h3, .text-teaser h3 span').prepend('<img src="files/layout2016/icons/more-infos-gold.png"/>');
        // social media icons
        $('.social-media li > a, #top-head .mail a, #top-head .phone a').wrapInner('<span></span>');


        //accordion
        $('.toggler').each(function(){
            $(this).click(function(){
                $(this).toggleClass('open');
            });
        });  
        // Navigation Efects
        
         $('.nav-wrapper').on('mouseenter',function(){
             $(this).children('nav').children('.level_1').toggleClass('open');
         });
        $('.nav-wrapper').on('mouseleave',function(){
            setTimeout(function () {
                $(this).children('nav').children('.level_1').removeClass('open')
            },20);
        });

        // responsive Nav Button
        $('.nav-responsive').click(function(){
            $('#navigation').toggleClass('show');
        });
        // Nav Button
        var navButton = $('a.submenu');
        var tapped = false;
        //navButton.addClass('foo');
        navButton.on("touchstart", function (e) {
            if (!tapped) { //if tap is not set, set up single tap
                tapped = setTimeout(function () {
                    e.preventDefault();
                    $(this).siblings('.level_2').addClass('show');
                    //insert things you want to do when single tapped
                }, 100);   //wait 100ms then run single click code
            } else {    //tapped within 300ms of last tap. double tap
                clearTimeout(tapped); //stop single tap callback
                window.location.href = $(this).attr('href');
                //insert things you want to do when double tapped
            }
            e.preventDefault()
        });
        
        var stickyNavTop = $('#page-header').offset().top;

                var stickyNav = function () {
                    var scrollTop = $(window).scrollTop();

                    if (scrollTop > stickyNavTop) {
                        $('#page-header').addClass('sticky');
                    } else {
                        $('#page-header').removeClass('sticky');
                    }
                };

                stickyNav();
                $(window).scroll(stickyNav);



    });


})(jQuery, this);

