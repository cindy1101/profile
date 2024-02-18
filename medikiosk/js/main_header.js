
/*let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh+"px");
// resize
window.addEventListener("resize", ()=>{
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh+"px");
});*/

//웹 헤더
function HeaderWeb() {
    
    if ($(window).outerWidth() >= 1280) {

        $(document).on('mouseover', '.lnb_web_box', function() {
            
            $('.dept01').stop().slideDown(300);

            if ($(window).scrollTop() <= $(".visual_ex").offset().top) {
                $(".web_header").addClass('header_basckground_color');
                $(".lnb_text_color").addClass('header_lnb_txt');
                $(".lnb_sub_text_color").addClass('header_sub_text_color');
                $(".dept01>li>a>p").addClass('hovered');
                $("#search_change_icon").attr("src","img/search_icon_black.png");
                $("#header_web_logo_change").attr("src","img/color_logo.png");
            }
        });

        $(document).on('mouseleave', 'div.lnb_web_box', function () {
            $('.dept01').stop().slideUp(300);

            if ($(window).scrollTop() <= $(".visual_ex").offset().top) {
                $(".web_header").removeClass('header_basckground_color');
                $(".lnb_text_color").removeClass('header_lnb_txt');
                $(".lnb_sub_text_color").removeClass('header_sub_text_color');
                $(".dept01>li>a>p").removeClass('hovered');
                $("#search_change_icon").attr("src","img/search_icon_white.png");
                $("#header_web_logo_change").attr("src","img/white_logo.png");
            }
        });

    } else if ($(window).scrollTop() > $(".visual_ex").offset().top) {
        $(".web_header").removeClass('header_basckground_color');
        $(".lnb_text_color").removeClass('header_lnb_txt');
        $(".lnb_sub_text_color").removeClass('header_sub_text_color');
        $(".dept01>li>a>p").removeClass('hovered');
        $("#search_change_icon").attr("src","img/search_icon_white.png");
        $("#header_web_logo_change").attr("src","img/white_logo.png");

    }else {
        $(document).off('mouseover', '.lnb_web_box');
        $(document).off('mouseleave', 'div.lnb_web_box');
    } 
}

//검색 웹
function searchWeb() {
            
    if ($('#search_web_chk').is(':checked')) {
        $(".search_web_box_ex").fadeIn();
        $('body').addClass("scrollOff");
    } else {
        $(".search_web_box_ex").fadeOut();
        $('body').removeClass("scrollOff");
    }

    //화면이 줄어들 때 체크 안 되고 스크롤 막는 것도 없애는 것
    if($(window).outerWidth() <= 1279){
        $('#search_web_chk').prop('checked', false);
        $('body').removeClass("scrollOff");
    }
}

//검색 모바일
function searchMobile() {
    
    if ($('#mobile_search_btn').is(':checked')) {
        $(".search_mobile_ex").fadeIn();
        //$('body').addClass("scrollOff");
    } else {
        $(".search_mobile_ex").fadeOut();
        //$('body').removeClass("scrollOff");
    }
}

//모바일 헤더 오픈시 스크롤 막기!
function MobileHeader(){

    /*if ($('#header_open_mobile').is(':checked') && $(window).outerWidth() <= 1024) {
        $('body').addClass("scrollOff");
    } else {
        $('body').removeClass("scrollOff");
    }*/

    if ($('#header_open_mobile').is(':checked') && $(window).outerWidth() <= 1279) {
        $('body').addClass("scrollOff");
    } else if ($(window).outerWidth() >= 1280) {
        $('#header_open_mobile').prop('checked', false);
        $('body').removeClass("scrollOff");
    } else {
        $('body').removeClass("scrollOff");
    }

}

$(document).ready(function(){

    //웹 헤더
    HeaderWeb();

    //모바일 헤더
    $('#header_open_mobile').change(function() {
        MobileHeader();
    });

    //모바일 서브메뉴 체크 시 하나만 오픈
    $('.lnb_chk').change(function() {
        if($(this).is(':checked')) {
        $('.lnb_chk').not(this).prop('checked', false);
        }
    });

    //검색 박스 - 웹
    $('#search_web_chk').change(function() {
        searchWeb();
    });

    //검색 박스 - 모바일
    $('#mobile_search_btn').change(function() {
        searchMobile();
    });

    //크기 줄어들 때
    $(window).resize(function () {

        //헤더
        HeaderWeb();
        searchWeb();

        //헤더
        if($(window).scrollTop() > $(".visual_ex").offset().top && $(window).outerWidth() <= 1279){

        $(".mobile_header").addClass('header_basckground_color');

        }else{
        $(".mobile_header").removeClass('header_basckground_color');
        }
        
        //헤더
        if($(window).scrollTop() > $(".visual_ex").offset().top && $(window).outerWidth() >= 1280){

            $(".web_header").addClass('header_basckground_color');
                $(".lnb_text_color").addClass('header_lnb_txt');
                $(".lnb_sub_text_color").addClass('header_sub_text_color');
                $(".dept01>li>a>p").addClass('hovered');
                $("#search_change_icon").attr("src","img/search_icon_black.png");
                $("#header_web_logo_change").attr("src","img/color_logo.png");
    
            }else{
                $(".web_header").removeClass('header_basckground_color');
                $(".lnb_text_color").removeClass('header_lnb_txt');
                $(".lnb_sub_text_color").removeClass('header_sub_text_color');
                $(".dept01>li>a>p").removeClass('hovered');
                $("#search_change_icon").attr("src","img/search_icon_white.png");
                $("#header_web_logo_change").attr("src","img/white_logo.png");
            }

        //모바일 헤더 스크롤 오프
        MobileHeader();


    });

});

 //스크롤 했을 때 일어나는 이벤트
 $(window).scroll(function(){

    //헤더
    if($(window).scrollTop() > $(".visual_ex").offset().top && $(window).outerWidth() >= 1280){
        
        $(".web_header").addClass('header_basckground_color');
        $(".lnb_text_color").addClass('header_lnb_txt');
        $(".lnb_sub_text_color").addClass('header_sub_text_color');
        $(".dept01>li>a>p").addClass('hovered');
        $("#search_change_icon").attr("src","img/search_icon_black.png");
        $("#header_web_logo_change").attr("src","img/color_logo.png");

    }else{
        $(".web_header").removeClass('header_basckground_color');
        $(".lnb_text_color").removeClass('header_lnb_txt');
        $(".lnb_sub_text_color").removeClass('header_sub_text_color');
        $(".dept01>li>a>p").removeClass('hovered');
        $("#search_change_icon").attr("src","img/search_icon_white.png");
        $("#header_web_logo_change").attr("src","img/white_logo.png");
    }

    //헤더
    if($(window).scrollTop() > $(".visual_ex").offset().top && $(window).outerWidth() <= 1279){

    $(".mobile_header").addClass('header_basckground_color');

    }else{
    $(".mobile_header").removeClass('header_basckground_color');
    }

});
