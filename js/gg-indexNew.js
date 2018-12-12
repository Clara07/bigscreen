/**
 * created by Clara Guo
 * 2018-09-27
 **/
//初始化轮播容器
var mySwiper = new Swiper ('.swiper-container', {
    direction:'horizontal',
    loop : true,
    autoplay : true,
    speed:1000,
    pagination : {
        el:'.swiper-pagination',
        clickable: true
    },
    grabCursor : true,
});
$(function(){
    $(".gg-logoCTitle a").click(function () {
        var index=$(this).index();
        $(this).addClass('gg-logoCItemActive').siblings().removeClass('gg-logoCItemActive');
        $(".gg-logoM").hide().eq(index).show();
    });
})