//map() method 
var array1 = [2,4,6,8,10,12,14,16,18,20];
var array2 = array1.map(myFun)
function myFun(value,index){
	return value*2
}
console.log(array2) 
//NOTE: output is =>  [ 4, 6, 8, 10, 12, 14, 16, 18, 20, 22 ]
