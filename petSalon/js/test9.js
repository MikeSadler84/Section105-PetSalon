$(function(){
    "use strict";
    
    $("main").on("click", loadAjax);

    function loadAjax(){
        $.ajax("js/pets.txt",{
            success:addContent,
            type: "GET",
            dataType: "text"
        });
    }
    function addContent(data,status,jqxhr){
        $("div#data").text(data);
        console.log(status);
    }

});