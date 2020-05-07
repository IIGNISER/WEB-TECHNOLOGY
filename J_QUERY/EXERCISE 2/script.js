var a = $("li:first-of-type").text();
console.log(a);

var b = $("li:last-of-type").text();
console.log(b);

$("li:first-of-type").text("Pineapple");
var a1 = $("li:first-of-type").text();
console.log(a1);

$("li:last-of-type").text("Orange");
var b1 = $("li:last-of-type").text();
console.log(b1);

$("ul").html("<li>Pawan</li> <li>Aditya</li> <li>Arvind</li>");
var c = $("li").text();
console.log(c);

$("img").css("width","500px");

$("img").attr("src", "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg");
$("input:first-of-type").attr("type","color");
$("input").val("PAWAN KUMAR");

$("h1").addClass("a");
$("li").addClass("b");