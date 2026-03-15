function checkUsername(userName) {
    if (userName) {
        console.log(userName)
    } else {
        console.log('I excecute')
        throw new Error('No username provided') // for custom error Error constructor is used
        console.log('I do not excecute')
    }
}

checkUsername() // if you input a string it will log out the string