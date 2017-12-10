var $imgs = $(".Box");

$(document).ready(function(){
    $(".Box img").on("click", function(){
        $("body").append('<div class="lightbox"></div>');
        var imgSrc = $(this).attr("src");
        console.log(imgSrc);
        $(".lightbox").css({"background-color" : "black", "width" : "100%", "height" : "100%"});
       
    });
    
});