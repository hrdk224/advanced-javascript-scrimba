// Get the starting timestamp

const start = performance.now()

console.log(start)

setTimeout(() => {
    //Get the ending timestamp
    const end = performance.now()
    console.log(`Excecution time: ${end - start} milliseconds`)

}, 0)

for (let i = 0; i < 1000000000; i++) {
    let answer = i * 2000000 / 67.8 * (45.7 / 3.2)
}

// Time without slow executing code: 4.6482 milliseconds
// Time with slow executing code: 356.2419 milliseconds