//If we want to give the input at run time in the console (npm install readline-module)
//  https://flaviocopes.com/node-input-from-cli/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`)
  readline.close()
})

//o/p ==> hai rahul
