// try catch finally 
try{                               --> check the condition
	var a = 244;
	var b = 233;
	var sum = a+b;
	console.log(sum)
} catch(error){                   --> if any erroy in try block then only it will excute
  console.log(error)
} finally{                        --> it will always execute
	console.log("done")
}

//output ==>477
            done
