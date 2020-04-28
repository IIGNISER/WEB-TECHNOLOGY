//While loop
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var num=5;
while(num<=50){
	if(num%5==0 && num%3==0){
		console.log(num);
	}
	num++;
}
//For loop
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
num=50;
for(i=5;i<=num;i++){
	if(i%3==0 && i%5==0){
		console.log(i)
	}
}