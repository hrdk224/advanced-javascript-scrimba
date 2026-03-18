// const emojis = ['🐥', '🐯', '🐼']
// console.log(emojis.includes('🐴')) //returns false
// console.log(emojis.includes('🐥')) //returns true

const addItemBtn = document.getElementById("add-item-btn")
const itemInput = document.getElementById("item-input")
const list = document.getElementById("list")

const shoppingList = []
addItemBtn.addEventListener('click', function () {
    /*
Challenge:
1. Add an if else to the event listener's function.
2. Only add an item to the shoppingList array if it 
   is not already in the shoppingList array.
3. If an item is a duplicate, clear the input field
   and log out "no duplicates".
*/
    if (shoppingList.includes(itemInput.value)) {

        console.log("no duplicates")
    }
    else {
        shoppingList.push(itemInput.value)
        render()
        console.log("Item added")
    }

    itemInput.value = ''

})

function render() {
    let html = ''
    for (let i in shoppingList) {
        html += `<li class="list-item">${shoppingList[i]}</li>`
    }
    list.innerHTML = html
}