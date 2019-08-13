//forEach() method 
var txt = " ";
var array1 = [2,4,6,8,10,12,14,16,18,20];
array1.forEach(myFun);

function myFun(value,index){
    txt = txt+value * 2+ " "
}
console.log(txt)
//NOTE: output is =>  4 8 12 16 20 24 28 32 36 40 
