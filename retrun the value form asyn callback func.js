//IN FILE1.JS
exports.fun2 = function(fn){
client.get("key",function(err,res){
	fn(res);
 })
}

//IN FILE2.JS
redis.fun2(function(redis){
	console.log(redis)
})

