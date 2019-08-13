//every() method
var array1 = [2,4,6,8,10,12,14,16,18,20];
var array2 = array1.every(myFun);

function myFun(value,index){
	return value>1;
};

console.log(array2)
//NOTE: output is => true


//every() method
var array1 = [2,4,6,8,10,12,14,16,18,20];
var array2 = array1.every(myFun);

function myFun(value,index){
	return value>5;
};

console.log(array2)
//NOTE: output is => false

