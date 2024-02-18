function WebCartPopup(){

    $(".reservation_web_cart").click(function(){

        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});

        const body = document.querySelector('body');
        body.style.overflowY = 'hidden';

        $(".reservation_cart_popup_ex").fadeIn();

    });


    $(".close_reservation_cart_btn").click(function(){

        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 

        const body = document.querySelector('body');
        body.style.overflowY = 'scroll';

        $(".reservation_cart_popup_ex").fadeOut();

    });

}

function MobileCartPopup(){

    $(".reservation_mobile_cart").click(function(){

        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});

        const body = document.querySelector('body');
        body.style.overflowY = 'hidden';

        $(".reservation_cart_popup_ex").fadeIn();

    });


    $(".close_reservation_cart_btn").click(function(){

        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 

        const body = document.querySelector('body');
        body.style.overflowY = 'scroll';

        $(".reservation_cart_popup_ex").fadeOut();

    });

}

$(document).ready(function(){

    WebCartPopup();
    MobileCartPopup();

    $(window).on('resize', function () {
        WebCartPopup();
        MobileCartPopup();
    });

});