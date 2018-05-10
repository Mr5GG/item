window.onload = function () {
    $(function () {
        var topHeight = $("#main_top").height();
        $(window).scroll(function () {
            var scrollHeight = $(document).scrollTop();
            // console.log(scrollHeight);
            if(scrollHeight >= topHeight){
                $("#banner_fixed").css("display","block");
            }else {
                $("#banner_fixed").css("display","none");
            }
        }) //jQuery完成滚动事件显示顶部固定通栏
    /*    $(".main-slider").mouseenter(function () {
            $(".main-slider span").css("display","block");
        });*/

        var num = 0;
        $("#slider_left").click(function () {
            num--;
            $(".main-slider-img").eq(num).fadeIn().siblings().fadeOut();
        })
        $("#slider_right").click(function () {
            num++;
            $(".main-slider-img").eq(num).fadeIn().siblings().fadeOut();
        })
    })
}