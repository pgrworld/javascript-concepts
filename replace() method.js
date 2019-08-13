//replace() method
var str = "securifi embedded systems at miyapur";
var change = str.replace("miyapur", "madhapur");
console.log(change)
//NOTE: output is => "securifi embedded systems at madhapur"

//replace() method  //If it is casesenstive 
var str = "securifi embedded systems at miyapur";
var change = str.replace(/MIYAPUR/i, "madhapur");
console.log(change)
//NOTE: output is =>"securifi embedded systems at madhapur"

//replace() method  // If we want to replace the glboaly
var str = "miyapur securifi embedded systems at miyapur";
var change = str.replace(/miyapur/g, "madhapur");
console.log(change)
//NOTE: output is =>"madhapur securifi embedded systems at madhapur";
