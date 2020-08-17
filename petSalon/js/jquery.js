$(function(){
    "use strict";
    console.log("Ready to work!");

    $(".nail-cutting").hide();
    $(".shots").hide();
    $(".declawing").hide();
    $(".fixing").hide();
    $(".full-service").hide();

    $("#groom").on("click", function(){
        $("#full-service").removeClass("bordered");
        $("#neuter").removeClass("bordered");
        $("#de-clawing").removeClass("bordered");
        $("#vaccine").removeClass("bordered");
        $("#nails").removeClass("bordered");
        $(".grooming").show();
        $(".nail-cutting").hide();
        $(".shots").hide();
        $(".declawing").hide();
        $(".fixing").hide();
        $(".full-service").hide();
        $(this).addClass("bordered");
    })
    $("#nails").on("click", function(){
        $("#full-service").removeClass("bordered");
        $("#neuter").removeClass("bordered");
        $("#de-clawing").removeClass("bordered");
        $("#vaccine").removeClass("bordered");
        $("#groom").removeClass("bordered");
        $(".nail-cutting").show();
        $(".shots").hide();
        $(".declawing").hide();
        $(".fixing").hide();
        $(".full-service").hide();
        $(".grooming").hide();
        $(this).addClass("bordered");
    })
    $("#vaccine").on("click", function(){
        $("#full-service").removeClass("bordered");
        $("#neuter").removeClass("bordered");
        $("#de-clawing").removeClass("bordered");
        $("#nails").removeClass("bordered");
        $("#groom").removeClass("bordered");
        $(".shots").show();
        $(".declawing").hide();
        $(".fixing").hide();
        $(".full-service").hide();
        $(".grooming").hide();
        $(".nail-cutting").hide();
        $(this).addClass("bordered");
    })
    $("#de-clawing").on("click", function(){
        $("#full-service").removeClass("bordered");
        $("#neuter").removeClass("bordered");
        $("#vaccine").removeClass("bordered");
        $("#nails").removeClass("bordered");
        $("#groom").removeClass("bordered");
        $(this).addClass("bordered");
        $(".declawing").show();
        $(".fixing").hide();
        $(".full-service").hide();
        $(".grooming").hide();
        $(".nail-cutting").hide();
        $(".shots").hide();
    })
    $("#neuter").on("click", function(){
        $("#full-service").removeClass("bordered");
        $("#de-clawing").removeClass("bordered");
        $("#vaccine").removeClass("bordered");
        $("#nails").removeClass("bordered");
        $("#groom").removeClass("bordered");
        $(this).addClass("bordered");
        $(".fixing").show();
        $(".grooming").hide();
        $(".nail-cutting").hide();
        $(".shots").hide();
        $(".declawing").hide();
        $(".full-service").hide();
        
    })
    $("#full-service").on("click", function(){
        $("#neuter").removeClass("bordered");
        $("#de-clawing").removeClass("bordered");
        $("#vaccine").removeClass("bordered");
        $("#nails").removeClass("bordered");
        $("#groom").removeClass("bordered");
        $(this).addClass("bordered");
        $(".full-service").show();
        $(".grooming").hide();
        $(".nail-cutting").hide();
        $(".shots").hide();
        $(".declawing").hide();
        $(".fixing").hide();
        
    })

    // Delete pets from the registered table

    // $(".btn").on({
    //     click: function(){
    //         $("td").remove();
    //     }
    // });
    
    // $("section nav.menu2 a").on("click", function(event){
    //     $(this).addClass("bordered");
    // })
})



