// variable scope in functions

//#.1
function a(test){
	console.log(test)
}

a(1)
//Note: output is "1"
//*************************************************************************************************************************************
//#.2
function a(test){
	console.log(test)
}
  test = 2;
  a()
  //Note:myAssumption output is "2:
  //NOte:output is "undefined" (if variable name and function parameter same names then output is undefined)
  
 //*********************************************************************************************************************************** 
  //#.3
   function a(test){
  	console.log(test);
  	t = "p";
  }
  t = "1";
  console.log(t);
  a();
  console.log(t);
  //Note1: myAssumption output is "1", "reference error", "1"
  //NOte2: output is "1", "undefined", "p"
  
  //*********************************************************************************************************************************************
  
  //#.4
  function a(test){
	console.log(test2);
  }
  test2 = "1a";
    a()
  //Note1: myAssumption output is "1a"
  //Note2: output is "1a"
  
  //************************************************************************************************************************************
  
  //#.5
  function a(test){
	test2 = "2";
	console.log(test2);
  }
  test2 = "1a";
  a(1)
  NOTE1: myAssumption output is "error";
  NOte2: output is "2";
 //******************************************************************************************************************************************
 
 //#.6
 function a(test){
	test = "p";
}
console.log(a())
NOTE1: output is undefined(if function didn't return anything then output is undefined)
//*************************************************************************************************************************************

//#.7
function a(test){
	test = "p";
	console.log(test)
}
test = "t";
a(test);
//NOTE1:myAssumption output is "t" 
//NOTE2:output is "p"
//****************************************************************************************************************************************

//#.8
function a(test){
	test = "p";
}
a("t")
console.log(test)
//NOTE1:myAssumption output is "p"
//NOTE2:output is "test is not defined(error)"
//*********************************************************************************************************************************************

//#.9
function a(test){
	test = "p";
}
test = "t";
a();
console.log(test);
//NOTE1:myAssumption output is "t"
//NOTE2:output is "t"
//*****************************************************************************************************************************
  
//#.10
function a(t){
	console.log(test)
}
test = "t";
a(test);
test = "p
//NOTE1: myAssumption output is "t"
//NOTE2: output is "t"
//*****************************************************************************************************************************************

//#.11
function a(t){
	test = "p"
}
a();
console.log(test)
NOTE1:myAssumption output is "p"
//******************************************************************************************************************************************
  
  
  
  
  
  
  
  
  
