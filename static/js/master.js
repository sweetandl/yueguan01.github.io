$(function () {

    //通用tab
    $('.j-tab .tabhd ul>li:nth-child(1)').addClass("z-sel");
    $(".j-tab .tabmn>.tabitm:nth-child(1)").show();
    $('.j-tab .tabhd ul>li').click(function () {
        $(this).addClass("z-sel").siblings().removeClass();
        $(this).parents(".j-tab").find(".tabmn>.tabitm").hide().eq($(this).index()).show();
    });

})