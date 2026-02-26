// setInterval: Repeatedly excecutes a function at a time delay between each call
// clearInteral: Stops the execution of the function started by setInterval

function startCountdown(device) {
    let secondsRemaining = 3

    const shutdownTimer = setInterval(function () {
        if (secondsRemaining > -100) {
            console.log(`Your ${device} will shut down in ${secondsRemaining} seconds`)
            secondsRemaining--
        }
        else {
            console.log(`Your ${device} is shutting down`)
            clearInterval(shutdownTimer)
        }
    }, 1000)
}
startCountdown(`MacBook`)