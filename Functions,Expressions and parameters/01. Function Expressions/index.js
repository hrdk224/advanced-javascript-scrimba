/*
Challenge:
    1. Convert this function declaration to a function expression.
*/

// const getTheftAlert = function(numberOfTransactionsHour){
//     if(numberOfTransactionHour > 5){
//         return `You have made ${numberOfTransactionsHour} transactions
//                 in the past hour. We think your card might have been
//                 compramised`
//     }
// }
// console.log(getTheftAlert(6))

const getTheftAlert = numberOfTransactionsHour => {
    if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions in the past hour. We think your card might have been compramised`
    }
}

console.log(getTheftAlert(6))