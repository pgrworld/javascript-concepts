// js object constructor
function Objcons(name,age,qualification,passout){
	this.name = name;
	this.age = age;
	this.qualification = qualification;
	this.passout = passout;
	this.desgination = "nodejs developer";
	//adding a method to a constructor
	this.name1 = function(){
		return this.name+ " "+this.age;
	}
}

var myDetails = new Objcons("gowrav","23","BTECH","2K18","nodejs");
console.log(myDetails.name)
console.log(myDetails.age)
console.log(myDetails.qualification)
console.log(myDetails.passout)
console.log(myDetails.desgination)


var myBro = new Objcons("swaroop","27","MBA","2k19");
console.log(myBro.name);
console.log(myBro.age)

//adding a property to an existing object this property will be added only to myBro
myBro.location = "vizag";
console.log(myBro.location);
console.log(myBro.desgination)

//we cant adding a property to a constructor(that means =>Ojbcons)
Objcons.desgination = "nodejs";

//accesing obj constructor method
console.log(myBro.name1())
