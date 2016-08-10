(function ($, root, undefined) {
    
    $(function () {
        //alert('hallo');
        $('a').each(function(){
            var moreLink = $(this).attr('title');
            if(moreLink == "more-infos"){
                $(this).addClass('more-link');
            }
        });

        
        // responsive
//        $(window).bind("resize", resizeWindow);
//        function resizeWindow(e) {
//            var newWindowWidth = $(window).width();
//
//            // If width width is below 600px, switch to the mobile stylesheet
//            if (newWindowWidth < 600) {
//                // alles für smartphones
//                
//            } else {
//                
//            }
//
//        }
        

    });

})(jQuery, this);
