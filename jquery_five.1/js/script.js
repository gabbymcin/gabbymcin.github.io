$("body").css("background-color","white");

var clicks = 0;

$("button").click(function() {
    clicks++
    $("body").css("background-color","grey");
    console.log(clicks);
    
    
});

    

for (var i=0; i < 50; i++) {
    $("body").append("<div class='box'></div>");
}

var counter = 0;

$(".box").each(function() {
    counter ++;
    console.log("found a dot...");
    $(this).html(counter);
});

$(".box").click(function() {
    $(this).html(counter);
});

$(".box").click(function() {
    if($(this).hasClass("whatever")) {
        $(this).removeClass("whatever");
    } else {
        $(this).addClass("whatever");
    }
});