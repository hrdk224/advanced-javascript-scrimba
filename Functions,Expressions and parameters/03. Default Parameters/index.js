import { itemsBoughtArr } from "./itemsBoughtArr.js";
// The function parameter discount is given a default value
function calculateTotalCost(itemsBoughtArr, discount = 10) {

    const total = itemsBoughtArr.reduce((total, currentItem) =>
        total + currentItem.priceUSD, 0)
    return total - discount
}

console.log(calculateTotalCost(itemsBoughtArr, 20))
// console.log(calculateTotalCost(itemsBoughtArr)) 