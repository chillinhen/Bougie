(function ($, root, undefined) {

    $(function () {

        //more infos
        $('a').each(function () {
            var moreLink = $(this).attr('title');
            if (moreLink == "more-infos") {
                $(this).addClass('more-link');
            }
        });
        // social media icons
        $('.social-media li > a, #top-head .mail a, #top-head .phone a').wrapInner('<span></span>');

        //first paragraph is lead 
//        $('.ce_text').each(function(){
//            $(this).children('p:first').addClass('lead');
//        });
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

                //stickyNav();
                //$(window).scroll(stickyNav);

        // responsive
        $(window).bind("resize", resizeWindow);
        function resizeWindow(e) {
            var newWindowWidth = $(window).width();

            // If width width is below 768px, switch to the mobile stylesheet
            if (newWindowWidth < 768) {


            } else {
                //scrolling

            }

        }



    });


})(jQuery, this);

