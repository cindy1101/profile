
function serviceTab(){

    $('.success_left_cont_box li').click(function(){

        if($(window).outerWidth() > 768){

            $('.success_right_cont_ex').removeClass('on');
            $('.success_left_cont_box li p').removeClass('on');
            
            $('.success_right_cont_ex').eq($(this).index()).addClass('on');
            $(this).children().addClass('on')

        }

    });

}

//개인정보처리방침 팝업창
function openPopup(){

    $('.open_privacy_popup_btn').click(function(){

        $('.privacy_popup_ex').fadeIn();

        $('body').addClass('scrollOff');

        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });

    });


    $('.privacy_popup_close_btn').click(function(){

        $('.privacy_popup_ex').fadeOut();

        $('body').removeClass('scrollOff');

        $('body').off('scroll touchmove mousewheel');

    });

}


//main header
function mainHeader() {

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

    serviceTab();
    openPopup();
    mainHeader();

    //fullpage
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        // navigationPosition: 'left',
        responsiveWidth: 769,
        navigationPosition: 'right',
        navigationTooltips: ['', 'About', 'Portfolio', 'Community', 'Inquiry' ],
        afterLoad: function(origin, destination, direction) {
            
            if (destination.index === 0 || destination.index === 4) { // 다섯 번째 섹션(0부터 시작하는 인덱스)
                $('.tplus_header').addClass('on'); 
                $('.header_gnb ul li a p').addClass('on');
                $('.header_logo img').attr('src', 'img/white_logo.png');
                
            } else {
                $('.tplus_header').removeClass('on'); 
                $('.header_gnb ul li a p').removeClass('on');
                $('.header_logo img').attr('src','img/color_logo.png');
            }
            
        },
        //responsiveWidth: 900, // 900이하일 때 스크롤바 생성

    }); //fullpage end


    $(window).resize(function(){

        mainHeader();

        if ($(window).outerWidth() >= 1025){

            $('body').removeClass('scrollOff');
            $('body').off('scroll touchmove mousewheel');

        }

    }); //resize end

});