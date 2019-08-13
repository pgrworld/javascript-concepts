
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
