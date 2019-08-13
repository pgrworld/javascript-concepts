//reduce() method 
var array1 = [2,4,6,8,10,12,14,16,18,20];
var array2 = array1.reduce(myFun);

function myFun(total,value){
	return total+value
}

console.log(array2);
//NOTE: output is => 110
