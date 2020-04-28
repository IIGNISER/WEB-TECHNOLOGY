var secretNumber = 8;
var guess=Number(prompt("Guess the number!"))
if(guess===secretNumber){
	alert("Yo! you guess it :-)")
}
else if(guess>secretNumber){
	alert("your guess is higher :-( try again!!")
}
else{
	alert("your guess is lower :-( try again!!")
}