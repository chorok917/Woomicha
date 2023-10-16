AOS.init();

//submenu_slide
$(".submenu").hide();
$(".gnb ul li").mouseenter(function () {
    $(this).children(".submenu").stop().slideDown();
});
$(".gnb ul li").mouseleave(function () {
    $(this).children(".submenu").stop().slideUp();
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
    if($(this).scrollTop() >400){
        $(".top_btn").fadeIn()
    }else{
        $(".top_btn").hide()
    }
});

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