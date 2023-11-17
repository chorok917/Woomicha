AOS.init();

//submenu_slide
$(".submenu").hide();
$(".gnb ul li").mouseenter(function () {
    $(this).children(".submenu").stop().slideDown();
});
$(".gnb ul li").mouseleave(function () {
    $(this).children(".submenu").stop().slideUp();
});

$(".inner_submenu").hide();
$(".submenu li").mouseenter(function () {
    $(this).children(".inner_submenu").stop().slideDown();
});
$(".submenu li").mouseleave(function () {
    $(this).children(".inner_submenu").stop().hide();
});

//header_scroll
$(window).scroll(function(){
    if($(this).scrollTop() >100){
        $(".header_fixed").addClass("header_scroll")
    }else{
        $(".header_fixed").removeClass("header_scroll")
    }
});

//top_btn
$(".top_btn").hide();
$(window).scroll(function(){
    if($(this).scrollTop() >700){
        $(".top_btn").fadeIn()
    }else{
        $(".top_btn").hide()
    }
});

//lnb
$(window).scroll(function(){
    if($(this).scrollTop() >300){
        $('.lnb').addClass('lnb_scroll')
    }else{
        $('.lnb_scroll').removeClass('lnb_scroll')
    }
});

//tea_farm_thumbs
mainImg = document.getElementById("mainImg");
thumb1 = document.getElementById("thumb1");
thumb1Src = document.getElementById("thumb1").src;
thumb2 = document.getElementById("thumb2");
thumb2Src = document.getElementById("thumb2").src;
thumb3 = document.getElementById("thumb3");
thumb3Src = document.getElementById("thumb3").src;
thumb4 = document.getElementById("thumb4");
thumb4Src = document.getElementById("thumb4").src;
thumb5 = document.getElementById("thumb5");
thumb5Src = document.getElementById("thumb5").src;
thumb1.addEventListener('click',function(){
    mainImg.src=thumb1Src
})
thumb2.addEventListener('click',function(){
    mainImg.src=thumb2Src
})
thumb3.addEventListener('click',function(){
    mainImg.src=thumb3Src
})
thumb4.addEventListener('click',function(){
    mainImg.src=thumb4Src
})
thumb5.addEventListener('click',function(){
    mainImg.src=thumb5Src
})

//sec5
var mainSlider = $('.main-slider');
var innerText = $('.inner-text');

mainSlider.slick({
    slidesToShow: 3,
    dots: true,
});

mainSlider.on('wheel', function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
    } else {
        $(this).slick('slickNext');
    }
});

innerText.on('wheel', function (e) {
    e.stopPropagation();
})

$('.slick-prev') .hide();

//confetti
document.getElementsByClassName("confetti")[0].addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    let container = document.getElementsByClassName("confetti_wrap")[0];
    container.appendChild(canvas);

    let confetti_wrap = confetti.create(canvas);
    confetti_wrap({
        particleCount: 200,
        spread: 200,
        starVelocity: 15,
        scalar: 0.9,
        ticks: 90
    }).then(() => container.removeChild(canvas));
});
