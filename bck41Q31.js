const prompt = require('prompt-sync')()
const userInput = prompt('Enter a number: ')


for( let i = userInput; i >= 1; i--) {
    for( let j = i; j <= userInput; j++) {
        console.log(j)
    }
}