//header
function header() {

    $('.menu_open_m').click(function() {

        if ($(window).outerWidth() <= 1024) {

            $('.tplus_mobile_header_sheet').css({
                'right': '0'
            });

            $('body').addClass('scrollOff');

            $('body').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });

        } 

    });


    $('.menu_close_m').click(function(){

        if ($(window).outerWidth() <= 1024) {

            $('.tplus_mobile_header_sheet').css({
                'right': '-100%'
            });

            $('body').removeClass('scrollOff');
            $('body').off('scroll touchmove mousewheel');

        }

    });
}

$(document).ready(function(){

    header();


    $(window).resize(function(){

        header();

        if ($(window).outerWidth() >= 1025){

            $('body').removeClass('scrollOff');
            $('body').off('scroll touchmove mousewheel');

        }

    }); //resize end

});