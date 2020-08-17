$(function(){
    "use strict";
    console.log("ready");

    $("section nav.menu a:first").hide();
    // $("#main form").remove(); removes an element completely
    // $("#main form").show(); shows an element

    var copy = $("main#main form").clone();
    // $("main").append(copy); adds to the bottom of the element
    //$("header").prepend(copy); adds to the top of the element
    $("#menu1").hide();
    $("#menu2").hide();
    $("#logo").on("click", function(){
        console.log("The logo was clicked");
        $("#menu1").show();
        $("#menu2").hide();
    })
    $("h1").on("click", function(){
        $("#menu2").show();
        $("#menu1").hide();
    })
    $("h1").on("mouseenter", function(){
        console.log("Mouse enters the title");
    })
    $("h1").on("mouseleave", function(){
        console.log("Mouse leaves the title.");
    })
    $("form").on("click", function(){
        //$(this).remove();
        $(this).addClass("bordered");
    })
    // $("section nav.menu2 a").on("click", function(event){
    //     $(this).addClass("bordered");
    // })

})