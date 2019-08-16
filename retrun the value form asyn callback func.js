//IN FILE1.JS
exports.fun2 = function(returning){
client.get("key",function(err,res){
	returning(res);
 })
}

//IN FILE2.JS
redis.fun2(function(res){
	console.log(res)
})
