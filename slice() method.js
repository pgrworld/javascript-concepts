//slice() method //slice() extracts a part of a string and returns the extracted part in a new string.(start,end)
var str = "securifi embedded systems at madhapur it is one of embedded systems company";
var string2 = str.slice(16,35);
console.log(str)
console.log(string2)
//Note: output is=> d systems at madhap


//slice() method  //If a parameter is negative, the position is counted from the end of the string.
var str = "securifi embedded systems at madhapur it is one of embedded systems company";
var string2 = str.slice(-25, -16);
console.log(str)
console.log(string2)
//Note: output is=> embedded
