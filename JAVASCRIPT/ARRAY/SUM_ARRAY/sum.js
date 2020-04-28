//Normal loops
function arraySum(arr){
	console.log("Sum of Array");
	sum = 0;
	for(var i=0;i<arr.length;i++){
		sum = sum + arr[i];
	}
	return sum;
}
//with forEach function
function sumArray(arr){
	console.log("Sum of Array");
	sum = 0;
	arr.forEach(function(element){
		sum = sum + element;
	});
	return sum;
}