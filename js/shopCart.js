$(function () {
    // 初始化fullpage组件
    // 1.设置每个屏幕的背景颜色
    // 2.设置屏幕内容的对齐方式，默认是垂直居中 改成顶部对齐
    // 3.设置导航 设置指示器，点容器
    // 4.监听第一屏的时候，回调
    $(".container").fullpage({
        /*配置参数*/
        sectionsColor:["#F9DD67","#84A2D4","#EF674D","#FFEEDD","#CF4759","#85D9ED","#6FAA85","#84D9ED"],
        verticalCentered:false,
        navigation:true,
        afterLoad:function (link,index) {
            $(".section").eq(index-1).addClass("new");
            $('.sofa-6').on('animationend',function () { //第六屏沙发做完动画隐藏
                $(this).hide();
            })
            $(".section-6 .box").on("animationend",function () {
                $(".send").animate({opacity:1},1000,function () {
                    $(".send").hide();
                    $(".address").animate({opacity:1},1000);
                })
            }) //第六屏路标改变
        },
        /*点击更多切换下一页*/
        /*最好在组件初始化完毕或者插件内容渲染完毕*/
        afterRender:function () {
            // console.log(this);
            // this没有对应api方法

            /*jQuery插件初始的时候封装这个方法*/
            /*jquery插件的封装 $.fn.fullpage = function(){}*/
            /*2.jQuery本身没有的方法通过$.fn的方式追加方法  可以认为是插件方法*/
            $(".more").on("click",function () {
                // jQuery本身没有的方法，可以通过$.fn的方式追加
                // $.fn是jQuery扩展插件的入口
                $.fn.fullpage.moveSectionDown();
            })
        },

        // 沙发掉落动画，需要判断屏幕离开的那一刻
        /*onLeave 离开某一页面的时候触发*/
        onLeave:function (index,nextIndex,direction) {
            // console.log("ok");
            if( index === 2 && nextIndex === 3 ){
                $('.section').eq(index - 1).addClass('leave');
            } // 第三屏内容
            if( index === 3 && nextIndex === 4 ){
                $('.section').eq(index - 1).addClass('leave');
                $(".screen-3 .sofa-3").on("animationend",function () {
                    $(".shopCart").animate({left:1300},2000);
                    $(".sofa-4").show().animate({left:1500},2000,function () {
                        $(".hint .hintImg1").css("opacity",0).siblings().animate({opacity:1},1000); // 第四屏收货提示显示
                        $(".addressImg").fadeIn(1000,function () {
                            $(".linkman").fadeIn(1000);
                        });
                    });
                })
            } //第四屏内容
            if( index === 5 && nextIndex === 6 ){
                $('.section').eq(index - 1).addClass('leave');
                $('.sofa5-6').show().animate({bottom:-500},1000);
            } // 第五屏内容
            if( index === 7 && nextIndex === 8 ){
                $(".section-8").on("mousemove",function (e) { // 第八屏手跟着图标移动
                    $(".section-8").find(".hand").css({
                        left: e.clientX - 360,
                        top: e.clientY - 100
                    });
                });
                $(".section-8").find(".again").on("click",function () {
                    $(".new").removeClass("new");
                    $(".leave").removeClass("leave");
                    $(".show").removeClass("show");
                    $(".content[style]").removeAttr("style");
                    $(".section-4").find("*").removeAttr("style"); // 找到第四屏幕所有的子节点
                    $.fn.fullpage.moveTo(1);
                })
            } // 第八屏内容
        },
        scrollingSpeed:1000, // 页面切换的时间，默认是700毫秒
    });


})