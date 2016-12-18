$("body").css("background-color","white");
$("body").addClass("gradient");

for (var i=0; i < 1; i++) {
    $("body").append("<div class='dot'></div>");

}
var visibility = 0;
var myCounter = 1;



//$("body").append("<img src=source.gif'" + weeknd[Math.floor(Math.random()*3)] + "'>");


   
    


$('#rain').hide();

$(".dot").click(function(){
    $(".dot").hide();
    $("p").hide();
    $(".whatever").hide();
    $("#weeknd").show();
});

$("#weeknd").click(function(){
    $("#weeknd").hide();
    $('#rain').show();
    $(".h1").hide();
});

$("#rain").click(function(){
    $("#rain").hide();
    $(".h1").show();
    $(".dot").show();
    $("p").show();
    $(".whatever").show();
 
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