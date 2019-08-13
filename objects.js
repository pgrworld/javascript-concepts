
//creating object from another object

var obj1 = {
   company : "securifi",
   location : "madhapur"
}

var obj2 = new Object(obj1);
console.log(obj2.company)
console.log(obj1.company)

delete obj2.company;
console.log(obj1.company);
console.log(obj2.company);


// Using an Object Literal
var obj = {
	name  : "gowrav",
	age : 23,
    qualification : "btech",
    desgination : "NODEJS Developer",
    location : "hyderabad"
};
delete obj.name;
obj.height = 5.4;

console.log(obj.name, obj.age)
console.log(obj.height)
console.log(obj.qualification, obj.desgination)



// Using the JavaScript Keyword new
var person = new Object();
person.name = "swaroop";
person.age = 27;
person.qualification = "MBA";
console.log(person.name);
console.log(person.age)
console.log(person.qualification)
delete person.age;
console.log(person.age);

var anna = person;
anna.location = "vizag";
console.log(person.location)


//javascript this keyword
var obj = {
	name : "gowrav pentakota",
	age : 23,
	func:function(){
		return this.name+ " "+ this.age
	}
}
console.log(obj.func())


// It is considered good practice to name constructor functions with an upper-case first letter.
//object constructor function

function Person(name,age,qualification,desgination,gender){
	this.name1 = name,
	this.age = age;
	this.qualification = qualification,
	this.gender = gender
}

var me = new Person("gowrav",23,"btech","nodejs developer","male")
console.log(me.name1)
console.log(me.age)


var anna = new Person("swaroop",27,"MBA");
console.log(anna.name1);
console.log(anna.age)


// prototype
// The JavaScript prototype property allows you to add new properties to object constructors:
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

Person.height = 5.4;
console.log(myFather.height)

Person.prototype.height = 5.4;
console.log(myFather.height)

console.log(myMother.height)





