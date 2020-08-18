$(function(){
    "use strict";


//another way to do this
// $("img#logo").on("mouseenter", increaseImg);
// $("img#logo").on("mouseleave", decreaseImg);
// function increaseImg() {
//     $(this).animate({"width":"50%"});
// }
// function increaseImg() {
//     $(this).animate({"width":"25%"});
// }

    $("img#logo").on("mouseenter", function(){
        $(this).animate({"width":"50%"});
    });
    $("img#logo").on("mouseleave", function(){
        $(this).animate({"width":"25%"});
    });
    

    // challenge: mouse enter increase width mouseleave decrease the width
});