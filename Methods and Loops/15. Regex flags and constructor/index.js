const text = "Please switch off the WIFI before you leave"
const userInput = "WIFI"

const regex = new RegExp(userInput, 'g')
const doesMatch = regex.test(text) //boolean

console.log(doesMatch) //true