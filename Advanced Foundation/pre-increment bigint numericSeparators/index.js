// Pre-increment
let currentTickerNumber = 0

function getNextTickerNumber() {
    return ++currentTickerNumber //Pre-increment returns after adding first unlike post-increment which does it later
    // same works for dcrement too
}

for (let i = 0; i < 3; i++) {
    console.log(`Guest ${i}, your ticket number is: ${getNextTickerNumber()}`)
}


// numeric-separator: used for easier readability

console.log(1_000_000_000_000)
console.log(typeof 1_000_000_000_000)

// bigInt
let x = BigInt(1_000_000_000_000) // also be represented as "10000000000000000n" by adding a "n" at the end  
console.log(x)
console.log(typeof x) // Since its BigInt you cannot perform algebraic operations with numbers it is mainly used for cryptography and other representations





