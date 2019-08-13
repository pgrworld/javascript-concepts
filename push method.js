//push() method // if we want to add a element into array at lost position 
var array = ["hero","honda","pulsar","yamha"];
console.log(array)
array.push("honda activa")
console.log(array)
//NOTE:output is =>[ 'hero', 'honda', 'pulsar', 'yamha' ]
// [ 'hero', 'honda', 'pulsar', 'yamha', 'honda activa' ]



//if we want to add the element into a particular position 
var array = ["hero","honda","pulsar","yamha"];
array[7] = "adding at sixth position";
console.log(array)
//NOTE: Output is =>[ 'hero','honda','pulsar', 'yamha', <3 empty items>,  'adding at sixth position' ]
