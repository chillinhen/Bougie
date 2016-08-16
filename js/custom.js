(function ($, root, undefined) {
    
    $(function () {
        //scrolling
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
        
        //more infos
        $('a').each(function () {
            var moreLink = $(this).attr('title');
            if (moreLink == "more-infos") {
                $(this).addClass('more-link');
            }
        });
        // social media icons
        $('.social-media li > a').wrapInner('<span></span>');
        
        //first paragraph is lead 
//        $('.ce_text').each(function(){
//            $(this).children('p:first').addClass('lead');
//        });

        
        // responsive
        $(window).bind("resize", resizeWindow);
        function resizeWindow(e) {
            var newWindowWidth = $(window).width();

            // If width width is below 600px, switch to the mobile stylesheet
            if (newWindowWidth < 600) {
                // alles für smartphones
                
            } else {
                // alles andere
            }

        }
        
        

    });


})(jQuery, this);

