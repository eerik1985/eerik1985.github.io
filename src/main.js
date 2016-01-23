$(function(){
    var scroll = function(){
        var scrollToTop = $(document).scrollTop();

        if ( scrollToTop > 0 ) {
            $(".navbar").addClass("show");
        } else {
            $(".navbar").removeClass("show");
        }
    };

    scroll();

    $(window).scroll(scroll);
});