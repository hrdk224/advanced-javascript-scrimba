const stopBtn = document.getElementById("stop-btn")
function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`)
}

console.log('What is the capital of Peru?')

const question = setTimeout(logAnswer, 3000, 'Lima', 10)
stopBtn.addEventListener("click", function () {
    clearTimeout(question)
    console.log("Cancelling")
})
