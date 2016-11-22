$("body").css("background-color","white");
$("body").addClass("gradient");

for (var i=0; i < 100; i++) {
    $("body").append("<div class='dot'></div>");
}

var visibility = 0;
var myCounter = 1;

var cats = ["img/face.jpg", "img/face.jpg", "img/face.jpg"];

//$("body").append("<img src=rex.gif'" + rex[Math.floor(Math.random()*3)] + "'>");


$(".dot").each(function() {
   $(this).css("opacity", visibility/100);
   $(this).html(myCounter);
   $(this).css("height",myCounter+100);
   $(this).css("width",myCounter+100);
   $(this).css("top",Math.floor(Math.random()*$(window).height()));
   $(this).css("left",Math.floor(Math.random()*$(window).width()));
   $(this).css("font-size",Math.floor(Math.random()*$(window).width()));
   myCounter++;
   visibility++;
   

});

$(".dot").click(function() {
   console.log(".dot");
    $("#rex").show();

});

$("#status").mouseleave(function() {
    $("#rex").show();
});