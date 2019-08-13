//lastiIndexOf() method
var str = "securifi embedded systems at madhapur it is one of embedded systems company";
var searching = str.lastIndexOf("systems");
console.log(searching)
//Note: output is => 60

//lastiIndexOf() method  //if searching word is not there "-1" will be printed.
var str = "securifi embedded systems at madhapur it is one of embedded systems company";
var searching = str.lastIndexOf("rahul");
console.log(searching)
//Note: output is => "-1"


//lastiIndexOf() method // it accepts the second parameter as the starting position for the search
var str = "securifi embedded systems at madhapur it is one of embedded systems company";
var searching = str.lastIndexOf("systems", 20);
console.log(searching)
