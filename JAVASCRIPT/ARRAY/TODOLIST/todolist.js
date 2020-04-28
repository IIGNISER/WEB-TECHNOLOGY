//1st methods
var todos = [];
var input = prompt("What would you like to do?");
while(input !== "quit"){
	if(input === "list"){
		todos.forEach(function(todo , i){
			console.log("**********");
			console.log(i + ": " + todo);
		});
		console.log("**********");
	}
	else if(input === "new"){
		var newTodo = prompt("Enter new Todo");
		todos.push(newTodo);
		console.log("Added Successfully!")
	}
	else if(input === "delete"){
		var index = prompt("Enter index of todo to delete");
		todos.splice(index,1);
		console.log("Deleted Successfully!")
	}
	var input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");