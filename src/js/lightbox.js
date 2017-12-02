var $imgs = $(".Box");

$(document).ready(function(){
    $(".Box img").on("click", function(){
        console.log($imgs);
        console.log(this);
        $("body").append('<div id="lightbox"></div>');
        var imgSrc = $(this).attr("src");
       
    });
    
});