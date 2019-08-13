//call method()
var obj1 = {
	details : function(){
		return this.name+ " "+this.age;
	}
}

var obj2 = {
	name : "swaroop",
	age : 27
}

var obj3 = {
	name : "gowrav",
	age : 23
}

console.log(obj1.details.call(obj3))
