//find() method  //The find() method returns the value of the first array element that passes a test function
var array1 = [2,4,6,8,10,12,14,16,18,20];
var array2 = array1.find(myFun);

function myFun(value,index){
	return value >12;
}
console.log(array2)
//NOTE: output is => "14" // it returns after the passing test element
