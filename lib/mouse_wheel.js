$(function() {
    $(".section").on('mousewheel', function(event, delta) {
        if ($(window).outerWidth() > 1024) {
            if (delta > 0) {
                var prev = $(this).prev().offset().top;
                $("html, body").stop().animate({ scrollTop: prev }, 1000);
            } else if (delta < 0) {
                var next = $(this).next().offset().top;
                $("html, body").stop().animate({ scrollTop: next }, 1000); 
            }
        }
    });
});