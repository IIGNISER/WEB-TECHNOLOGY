//2nd methods
var todos = [];
var input = prompt("What would you like to do?");
while(input !== "quit"){
	if(input === "list"){
		listTodos();
	}
	else if(input === "new"){
		addTodos();
	}
	else if(input === "delete"){
		delTodos();
	}
	var input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
	todos.forEach(function(todo , i){
			console.log("**********");
			console.log(i + ": " + todo);
		});
		console.log("**********");
}

function addTodos(){
	var newTodo = prompt("Enter new Todo");
	todos.push(newTodo);
	console.log("Added Successfully!");
}

function delTodos(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Successfully!");
}