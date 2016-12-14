console.log("hello, this is the console...")

$("body").css("background-color","blue");

var clicks = 0;

$("button").click(function() {
    clicks = clicks ++;
    console.log(clicks);
});