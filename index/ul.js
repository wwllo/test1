$(function() {
    $(".font1").mouseenter(function() {
        console.log("hello");
        $(".font1>.serve-t").css({ "opacity": "0", "position": "absolute", "top": "-115px" });
        $(".font1>.serve-p").css({ "opacity": "0", "position": "absolute", "top": "50px" });
        $(".font1>.serve-t").animate({
            opacity: 1,
            // position:static,
            top: -80,
        }, 1000)
        $(".font1>.serve-p1").animate({
            opacity: 1,
            // position:static,
            top: -50,
        }, 1000)
        $(".font1>.serve-p2").animate({
            opacity: 1,
            // position:static,
            top: -25,
        }, 1000)

    })
    $(".font2").mouseenter(function() {
        console.log("hello");
        $(".font2>.serve-t").css({ "opacity": "0", "position": "absolute", "top": "-115px" });
        $(".font2>.serve-p").css({ "opacity": "0", "position": "absolute", "top": "50px" });
        $(".font2>.serve-t").animate({
            opacity: 1,
            // position:static,
            top: -55,
        }, 1000)
        $(".font2>.serve-p1").animate({
            opacity: 1,
            // position:static,
            top: -25,
        }, 1000)
    })
    $(".font3").mouseenter(function() {
        console.log("hello");
        $(".font3>.serve-t").css({ "opacity": "0", "position": "absolute", "top": "-115px" });
        $(".font3>.serve-p").css({ "opacity": "0", "position": "absolute", "top": "50px" });
        $(".font3>.serve-t").animate({
            opacity: 1,
            // position:static,
            top: -80,
        }, 1000);
        $(".font3>.serve-p1").animate({
            opacity: 1,
            // position:static,
            top: -50,
        }, 1000);
        $(".font3>.serve-p2").animate({
            opacity: 1,
            // position:static,
            top: -25,
        }, 1000);

    })


})