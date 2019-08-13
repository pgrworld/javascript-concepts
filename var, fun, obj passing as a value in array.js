//Here function, variable, object passing as a value into array
var x = function(){
	return "return function"
}

var variable = 555;

var obj = {
	key1 : "first value",
	key2 : "second value"
}

var array = ["hero",obj,variable,x()];

console.log(array[3]);
console.log(array[2]);
console.log(array[1].key2);
console.log(array[0]);
//NOTE: output is =>return function
//                  555
//                  second value
//                  hero
