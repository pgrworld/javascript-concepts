
//promises
var creatingPromise = new Promise(function(arg1,arg2){
	var text ="securifi embedded systems";
	if(text == "securifi eembedded systems"){
			arg1();
	}else{
		arg2();
	}
	
});
creatingPromise.then(function(){
	console.log("sucess")
}).catch(function(){
	console.log("failed")
});
