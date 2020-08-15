$(function(){
    "use strict";
    console.log("Ready to work!");

    $(".nail-cutting").hide();
    $(".shots").hide();
    $(".declawing").hide();
    $(".fixing").hide();
    $(".full-service").hide();

    $("#groom").on("click", function(){
        
        $(".grooming").show();
        $(".nail-cutting").hide();
        $(".shots").hide();
        $(".declawing").hide();
        $(".fixing").hide();
        $(".full-service").hide();
        // $(this).addClass("bordered");
    })
    $("#nails").on("click", function(){
        $(".nail-cutting").show();
        $(".shots").hide();
        $(".declawing").hide();
        $(".fixing").hide();
        $(".full-service").hide();
        $(".grooming").hide();
        // $(this).addClass("bordered");
    })
    $("#vaccine").on("click", function(){
        $(".shots").show();
        $(".declawing").hide();
        $(".fixing").hide();
        $(".full-service").hide();
        $(".grooming").hide();
        $(".nail-cutting").hide();
        // $(this).addClass("bordered");
    })
    $("#de-clawing").on("click", function(){
        // $(this).addClass("bordered");
        $(".declawing").show();
        $(".fixing").hide();
        $(".full-service").hide();
        $(".grooming").hide();
        $(".nail-cutting").hide();
        $(".shots").hide();
    })
    $("#neuter").on("click", function(){
        // $(this).addClass("bordered");
        $(".fixing").show();
        $(".grooming").hide();
        $(".nail-cutting").hide();
        $(".shots").hide();
        $(".declawing").hide();
        $(".full-service").hide();
        
    })
    $("#full-service").on("click", function(){
        // $(this).addClass("bordered");
        $(".full-service").show();
        $(".grooming").hide();
        $(".nail-cutting").hide();
        $(".shots").hide();
        $(".declawing").hide();
        $(".fixing").hide();
        
    })
    
    // $("section nav.menu2 a").on("click", function(event){
    //     $(this).addClass("bordered");
    // })
})