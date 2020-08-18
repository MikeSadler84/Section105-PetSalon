$(function(){
    "use strict";
    $("img#logo").css({"width": "200px"});
    $("h2").css({"color": "blue",
    "textTransform": "uppercase"
    });

    $("nav.menu").on("mouseenter", function(){
        $(this).css({"backgroundColor": "red"});
    });
    $("nav.menu").on("mouseleave", function(){
        $(this).css({"backgroundColor": "white"});
    });
});