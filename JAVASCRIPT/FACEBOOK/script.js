var database = [
	{
		username : "iigniser",
		password : "iigniser@123"
	},
	{
		username : "roshan",
		password : "roshan@123"
	},
	{
		username : "sachin",
		password : "sachin@123"
	},
];

function isUserValid(username,password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

var newsFeed = [
	{
		username : "aditya",
		timeline : "I am good at Coding"
	},
	{
		username : "arvind",
		timeline : "I love cricket"
	}
];

userNamePrompt = prompt("Enter your username!!!");
passwordPromot = prompt("Enter your password!!!");

function signIn(username,password){
	if(isUserValid(username,password)) {
		console.log(newsFeed);
	} else{
		alert("Sorry wrong username and password :-( Try again!!!")
	}
}

signIn(userNamePrompt,passwordPromot);