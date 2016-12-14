$("body").css("background-color","white");
$("body").addClass("gradient");

for (var i=0; i < 100; i++) {
    $("body").append("<div class='dot'></div>");

}
var visibility = 0;
var myCounter = 1;



//$("body").append("<img src=source.gif'" + weeknd[Math.floor(Math.random()*3)] + "'>");


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

$('#rain').hide();

$(".dot").click(function(){
    $("#weeknd").show();
});

$("#weeknd").click(function(){
    $("#weeknd").hide();
    $('#rain').show();
});

$("#rain").click(function(){
    $("#rain").hide();
    $('#weeknd').show();
});


// $(".dot").click(function() {
//   console.log(".dot");
//     $("#weeknd").show();

// });

// $("#status").mouseleave(function() {
//     $("#weeknd").show();
// });






// $(".weeknd").click(function() {
//     $(this).html(counter);
// });

// $(".weeknd").click(function() {
//     if($(this).hasClass("rain")) {
//         $(this).removeClass("rain");
//     } else {
//         $(this).addClass("rain");
//     }
// });