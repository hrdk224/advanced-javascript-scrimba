function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function processFile(callback) {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function notifyUser() {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying user...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

/* 
   Challenge:
   1. Await these parameters in order in a try/catch block
     and when they are done, log 'All steps completed!'.

*/

// expected output:
// Step1: Uploading file...
// Step2: Processing file...
// Step3: Notifying user...
// All steps completed!

try {
    await uploadFile()
    await processFile()
    await notifyUser()
    console.log('All steps completed')
} catch (err) {

}