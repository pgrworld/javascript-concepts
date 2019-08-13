//.1
var obj = {
	key1 : "gowrav"
}

obj.key1 = "rahul";

console.log(obj.key1) ==> rahul

//.2
var obj = {
	key1 : "gowrav"
}

Object.freeze(obj)
obj.key1 = "rahul";

console.log(obj.key1) ==> gowrav
