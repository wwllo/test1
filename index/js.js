$(function() {
    var win_W = $(window).width();
    $(".uiPage").css({ "min-width": win_W });
    $(".title>ul>li").on("mouseenter", function() {
        $(this).children("a").css({ "color": "#2ab0a4" }).parent().siblings().children().css({ "color": "white" });
        // $(this).css({"background":"rgba(0,0,0,.1)"});
    });

    $(".firstI").on("mouseenter", function() {
        $(".firstF").css({ "opacity": "0" });
        $(".firstF").animate({ opacity: "1" }, 1000);
    })



    $(".title>ul>.school").on("mouseenter", function() {
        $(".dis1").slideDown();
        $(".dis1").on("mouseenter", function() {
            $(".dis1").show();
        });
        $(".dis1").on("mouseleave", function() {
            $(".dis1").hide();
        });
    });


    $(".title>ul>.school").on("mouseleave", function() {
        $(".dis1").hide();
    });







    $(".phone").on("mouseenter", function() {
        $(".dis2-img").fadeIn();
    });
    $(".phone").on("mouseleave", function() {
        $(".dis2-img").fadeOut();
    });


    $(".img-dis3>img").mouseenter(function() {
        $(this).next(".dis3-div1").css({ "background": "rgba(0,0,0,.3)" });
        $(this).next(".dis3-div1").animate({
            top: "0px",
        }, 800);
    });
    $(".img-dis3").mouseleave(function() {
        $(this).children(".dis3-div1").css({ "background": "none" });
        $(this).children(".dis3-div1").animate({
            top: "148px",
        }, 800);
    });



    $(".secondI").on("mouseenter", function() {
        // console.log($(".sec-im-p"));
        $(".sec-content-img").css({ "opacity": "0" });
        $(".sec-content-img").animate({ opacity: "1" }, 1000);
        $(".sec-content-imgW").css({ "height": "0", "overflow": "hidden" });
        $(".sec-content-imgW").animate({ height: "434" }, 1000);
    })



})