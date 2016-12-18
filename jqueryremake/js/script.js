var clicks = 0;

$("button").click(function() {
    clicks++
    $("body").css("background-color","grey");
    console.log(clicks);
});

for (var i=0; i < 45; i++) {
    //$("body").append("<div class='box'></div>");
}

var counter = 0;

$(".box").click(function() {
    $("#aaaa").toggle();
});


$(".box-two").click(function() {
    $("#bb").toggle();
});

$(".box-three").click(function() {
    $("#cc").toggle();
});

$(".box-four").click(function() {
    $("#dd").toggle();
});

$(".box-five").click(function() {
    $("#ee").toggle();
});

$(".box-six").click(function() {
    $("#ff").toggle();
});


$(".container").click(function() {
    //toggles visibility of child found within clicked element
    $(this).find(".child").toggle();
});
