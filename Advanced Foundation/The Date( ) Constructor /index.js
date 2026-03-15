const dateSnapshot = new Date()
console.log(dateSnapshot) //type object
console.log(dateSnapshot.toString()) //type string

// The above ones gives us more detailed snapshot but if we only want year
// We us .getFullYear() method

console.log(`Copyright @${dateSnapshot.getFullYear().toString()} all rights reserved.`)