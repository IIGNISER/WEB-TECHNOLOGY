var age=prompt("What is your age?")
if(age<0){
	console.log("Come back once you are out of the womb!")
}
if(age==21){
	console.log("Happy 21st Birthday!")
}
if(age>0 && age%2 !== 0){
	console.log("Your age is odd!")
}
if((age%2 !== 0) && age % Math.sqrt(age) === 0){
	console.log("Your age is perfect Square!")
}