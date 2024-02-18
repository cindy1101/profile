
$(function(){

    //header IOS 크롬에서 볼 때 크기 조절
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh+"px");
    // resize
    window.addEventListener("resize", ()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh+"px");
    });

    //header 메뉴 체크시 움직이지 않게
    $(document).ready(function() {
        $("#menu_open_mobile").on('click', function() {
            if ( $(this).prop('checked') && window.innerWidth <= 1024) {
                $(this).parent().addClass("scrollOff");
            } else {
                $(this).parent().removeClass("scrollOff");
            }
            });
    });

    //메뉴 밑
    $('.m_lnb_box').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        autoplay: false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });


    //이메일무단수집
    $("#open_emaile").click(function(){
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();});
        $("#emale_no_ex").fadeIn(100);
        const body = document.querySelector('body');
        body.style.overflowY = 'hidden'
    });

    $("#emaile_close_btn").click(function(){
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel'); 
        modalClose(); 
        const body = document.querySelector('body');
        body.style.overflowY = 'scroll'
    });

    function modalClose(){
    $("#emale_no_ex").fadeOut(100);}


   //서브페이지 비주얼 이미지 효과
    $('.visual_animation').css('transform', 'scale(1)');


});