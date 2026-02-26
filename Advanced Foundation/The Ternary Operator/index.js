const exerciseTimeMins = 100
// SIMPLE VERSION
// let message = ''

// if (exerciseTimeMins < 30) {
//     message = 'You need to try harder!'

// } else {
//     message = 'You Doing good!'
// }



//Syntax : condition ? expression(Truthy) : expression(Falsy)
// let message = exerciseTimeMins < 30 ? "You need to try Harder" : "You Doing Good"

// console.log(message)

// FOR COMPLEX CONDITIONALS
// let message = ''

// if (exerciseTimeMins < 30) {
//     message = 'You need to try harder!'

// } else if(exerciseTimeMins < 60) {
//     message = 'You Doing good!'
// } else { 
//    message = 'Excellent!'}

const message = exerciseTimeMins < 30 ? "You need to try harder!" : exerciseTimeMins < 60 ? "You Doing good!" : "Excellent"
console.log(message)
