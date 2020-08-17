$(function(){
    "use strict"

    $("main").on({
        click: function(){
            $(this).addClass("red-BG");
        },
        mouseenter: function(){
            $(this).addClass("active");
        },
        mouseleave: function(){
            $(this).removeClass("active red-BG");
        }
    });

   let text = $("main h2").text();
   console.log(text);
   $("main h2").text("<h1>Hello World</h1>"); // Changes the text in the HTML
   $("main h2").html("<h1>Hello World</h1>"); // changes text and lets you change HTML elements

   //click footer and change the h2 text
   $("footer").on({
    click: function(){
        $("main h2").html("<h1>Hello</h1>");
    }
    
});
});


$("header img.logo").on({
    click: function(){
        $(this).attr("src", "img/cat.png"); // use (this) when you are changing the same element that is in the first $()
    }
});
