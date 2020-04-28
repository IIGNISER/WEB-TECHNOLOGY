var colors = ["red","orange","blue","yellow"]
function myForEach(arr,func){
	for(var i=0;i<arr.length;i++){
		func(arr[i]);
	}
}
console.log(colors,alert);
myForEach(colors,alert);