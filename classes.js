//.1
function Person(){
	this.name = "unknown",
	this.lname = " unknown"
}

var person2 = new Person();
person2.name = "gowrav";
person2.lname = "pentakota";

console.log(person2.lname)

var person3 = new Person();
person3.name = "swaroop";
console.log(person3.name)



//.2
function Student(name,age){

  this.name = name
  this.age = age
}

const student1 = new Student('king',20)
console.log(student1.name)
console.log(student1.age)


//.3
class selfDetails{
 
 constructor(name,age,qualification,gender){
 	this.name = name;
 	this.age = age;
 	this.qualification = qualification;
 	this.gender = gender;
 }
}

var stu = new selfDetails("gowrav",23,"btech","male")
console.log(stu.name);
console.log(stu.age);
console.log(stu.qualification);
console.log(stu.gender)

var stu2 = new selfDetails("swaroop",27,"MBA","MALE")
console.log(stu2.name);
console.log(stu2.qualification);




//.4
//methods in classes
class Details{
	constructor(company,location,technology){
		this.company = company,
		this.location = location,
		this.technology = technology
	}
	getSomething(){
		return this.location;
	}
}

var com1 = new Details("securifi","madhapur","nodejs");
console.log(com1.company)
console.log(com1.getSomething())


//.5
//Extends in classes
class class1{
	constructor(name,age){
		this.name = name,
		this.age = age
	}
}

// var stu1 = new class1("rahul",23);
// console.log(stu1.name);

class class2 extends class1{
	constructor(name,age,course){
		super(name,age);
		this.course = course
	}
}

var stu2 = new class2("gowrav",24,"nodejs")
console.log(stu2.name);
console.log(stu2.age);
console.log(stu2.course);
