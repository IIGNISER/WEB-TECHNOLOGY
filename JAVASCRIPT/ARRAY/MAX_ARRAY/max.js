function max(arr){
	var max = arr[0];
	for(i=1;i<arr.length;i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}