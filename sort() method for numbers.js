//sort() method //sorting numbers from low to high
var array = [10,25,42,55,4,8,12,16,49,78,99,84];
console.log(array)
//NOTE: output is => [ 10, 25, 42, 55, 4, 8, 12, 16, 49, 78, 99, 84 ]
var sorting = array.sort(function(a,b){return a-b});
console.log(sorting);
//NOTE: output is => [ 4, 8, 10, 12, 16, 25, 42, 49, 55, 78, 84, 99 ]


//sort() method  //sorting numbers from high to low
var array = [10,25,42,55,4,8,12,16,49,78,99,84];
console.log(array);
//NOTE: output is => [ 10, 25, 42, 55, 4, 8, 12, 16, 49, 78, 99, 84 ]
var sorting = array.sort(function(a,b){return b-a});
console.log(sorting);
//NOTE: output is => [ 99, 84, 78, 55, 49, 42, 25, 16, 12, 10, 8, 4 ]


