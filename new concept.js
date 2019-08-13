//.1
var obj = {
	key1 : "gowrav"
}

Object.freeze(obj)
obj.key1 = "rahul";

console.log(obj.key1) ==> gowrav

//.2
var x = [1,2,3,4];
var y = [5,6,7,8];
console.log(...x,...y)
