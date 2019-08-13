//filter() method
var array1 = [2,4,6,8,10,12,14,16,18,20];
var array2 = array1.filter(myFun);

function myFun(value, index){
	return value > 8
}

console.log(array2)
//NOTE: Output is => [ 10, 12, 14, 16, 18, 20 ]
