//splice() method //By using splice() method we can add elements and remove elements at a particular position 
var array = ["hero","honda","pulsar","yamha"];
array.splice(2, 1);
console.log(array)
//NOTE:output is => [ 'hero', 'honda', 'yamha' ]

array.splice(2,0, "bmw")
console.log(array)
//NOTE: output is => [ 'hero', 'honda', 'bmw', 'yamha' ]
