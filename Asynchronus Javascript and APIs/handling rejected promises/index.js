// fetch('https:dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => {
//         console.log(err)
//         // update the DOM to warn the user 
//         // access an alternative API
//     })
//     .finally(() => console.log('The operation completed.'))

/*
 Challenge:
 1. Convert the above code to use async/await, handle errors with "try/catch" blocks, and add "finnaly" block.

*/

try {
    // the code we want to excecute
    const response = await fetch('https:dog.ceo/api/breeds/image/random')
    const data = await response.json()
    console.log(data)
} catch (err) {
    // the code to excecute on an error
    console.log(err)
} finally {
    // code to execute at the end of the operation
    console.log('The operation completed.')
}