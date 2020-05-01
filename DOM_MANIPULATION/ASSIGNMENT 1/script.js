// Select first <p> tag using DOM MANIPULATION

// first case
var a = document.getElementById("first");
console.log(a);
// second case
var b = document.querySelector("p");
console.log(b);
// third case
var c = document.querySelector("#first");
console.log(c);
//fourth case
var d = document.querySelector(".special");
console.log(d);
// fifth case
var e = document.getElementsByClassName("special") [0];
console.log(e);
// sixth case
var f = document.querySelectorAll(".special") [0];
console.log(f);
// seventh case
var g = document.getElementsByTagName("p") [0];
console.log(g);
// eighth case
var h = document.querySelectorAll("p") [0];
console.log(h);