$(function () {
    $('.item').on('click',function () {
        $(this).parent().children('.menu').toggle();
        $(this).parent().siblings().children('.menu').hide();
    })
    $('.subItem').on('click',function () {
        $(this).parent().children('.subMenu').toggle();
        $(this).parent().siblings().children('.subMenu').hide();
    })
})