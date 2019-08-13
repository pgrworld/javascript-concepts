//finding highest no in the array
var array = [10,25,42,55,4,8,12,16,49,78,99,84];
function myFunction(arg){
	return Math.max.apply(null,arg);
}
console.log(myFunction(array))
//NOTE: output is => 99



//finding lowest no in the array
var array = [10,25,42,55,4,8,12,16,49,78,99,84];
function myFunction(arg){
	return Math.min.apply(null,arg);
}
 console.log(myFunction(array))
 //NOTE: output is => 4

