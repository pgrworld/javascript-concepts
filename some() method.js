//some() method 
var array1 = [2,4,6,8,10,12,14,16,18,20];
var array2 = array1.some(myFun);

function myFun(value,index){
	return value>10;
};

console.log(array2)
//NOTE: output is => "true"



//some() method 
var array1 = [2,4,6,8,10,12,14,16,18,20];
var array2 = array1.some(myFun);

function myFun(value,index){
	return value>100;
};

console.log(array2)
//NOTE: output is => "false"
