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
    $(this).children(".inner_submenu").stop().slideUp();
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

//prod
$(".bar li").click(function(){
    $(this).addClass("bar_on").siblings().removeClass("bar_on")
});
$('.green').hide();
$('.fermented').hide();
$('.fruit').hide();
$('.veget').hide();
$('#whole').click(function(){
    $('.whole').show().siblings().hide();
    $('.number1').show();
})
$('#green').click(function(){
    $('.green').show().siblings().hide();
    $('.number1').hide();
})
$('#fermented').click(function(){
    $('.fermented').show().siblings().hide();
    $('.number1').hide();
})
$('#fruit').click(function(){
    $('.fruit').show().siblings().hide();
    $('.number1').hide();
})
$('#veget').click(function(){
    $('.veget').show().siblings().hide();
    $('.number1').hide();
})

$('#page2').hide();
$('.no1').click(function(){
    $('#page1').show().siblings().hide();
    $('.no1').addClass('number_on');
    $('.no2').removeClass('number_on')
})
$('.no2').click(function(){
    $('#page2').show().siblings().hide();
    $('.no2').addClass('number_on');
    $('.no1').removeClass('number_on')
})

//tea_ware
$('.pot').hide();
$('.cup').hide();
$('.matcha_tools').hide();
$('.strainer').hide();
$('.set').hide();
$('.ect').hide();

$('#ware_whole').click(function(){
    $('.whole').show().siblings().hide();
    $('.number2').show();
})
$('#pot').click(function(){
    $('.pot').show().siblings().hide();
    $('.number2').hide();
})
$('#cup').click(function(){
    $('.cup').show().siblings().hide();
    $('.number2').hide();
})
$('#matcha_tools').click(function(){
    $('.matcha_tools').show().siblings().hide();
    $('.number2').hide();
})
$('#strainer').click(function(){
    $('.strainer').show().siblings().hide();
    $('.number2').hide();
})
$('#set').click(function(){
    $('.set').show().siblings().hide();
    $('.number2').hide();
})
$('#ect').click(function(){
    $('.ect').show().siblings().hide();
    $('.number2').hide();
})

$('#ware_page2').hide();
$('#ware_page3').hide();
$('.no2_1').click(function(){
    $('#ware_page1').show().siblings().hide();
    $('.no2_1').addClass('number_on');
    $('.no2_2').removeClass('number_on')
    $('.no2_3').removeClass('number_on')
})
$('.no2_2').click(function(){
    $('#ware_page2').show().siblings().hide();
    $('.no2_2').addClass('number_on');
    $('.no2_1').removeClass('number_on')
    $('.no2_3').removeClass('number_on')
})
$('.no2_3').click(function(){
    $('#ware_page3').show().siblings().hide();
    $('.no2_3').addClass('number_on');
    $('.no2_1').removeClass('number_on')
    $('.no2_2').removeClass('number_on')
})


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
