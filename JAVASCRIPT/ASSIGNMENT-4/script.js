var age = prompt("Enter the age of the person");
if(Number(age)<18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} if (Number(age)===18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
} if (Number(age)>18) {
	alert("Powering On. Enjoy the ride!");
}