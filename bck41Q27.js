const prompt = require("prompt-sync")();
const userInput = prompt('Enter a number: ')

for(let i = 1; i <= userInput; i++) {
    for(let j = 1; j <= i; j++) {
        console.log(i)
    }
}