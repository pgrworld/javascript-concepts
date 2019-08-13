// annonymous function

var x = function (){
	console.log("annonymous functions");
};

 x()
//Note: output is "annonymous function"

 var x = function fun_one(){
	console.log("annonymous functions");
};

fun_one()  // reference error fun_one is not defined so we have to call => x()
