/*
App requirements:
 - The app should display the name, symbol, and 
   price of the stock, with a timestamp as per the 
   screenshot. 
 - The triangle compares the current stock price to 
   its previous price. If the price has increased, it 
   should be a green triangle pointing up, if the price 
   has decreased it should be a red triangle pointing 
   down, and if there has been no change it should be a 
   grey triangle pointing to the right.
 - The price should update every 1.5 seconds. 
*/

/*
Challenge:
  1. Find a way to get fresh stock data every 1.5 seconds.
  2. Call the renderStockTicker function with the fresh data.
  3. Add logic to renderStockTicker to display the correct 
     information.
  ⚠️ You will need to write code here in index.js and in
   fakeStockAPI.js.
*/
import { getStockData } from "./fakeStockAPI.js"

const name = document.getElementById("name")
const symbol = document.getElementById("symbol")
const price = document.getElementById("price")
const time = document.getElementById("time")
const priceIcon = document.getElementById("price-icon")

name.innerHTML = getStockData().name
symbol.innerHTML = getStockData().sym
setInterval(function () {
    time.innerHTML = getStockData().time
    price.innerHTML = getStockData().price

    const priceDirection = getStockData().price > 1.5 ? 'green (1).svg' : getStockData().price < 1.5 ? 'red.svg' : 'grey.svg'
    const priceIconElement = document.createElement('img')
    priceIconElement.src = `svg/${priceDirection}`
    priceIconElement.alt = 'Price direction icon'
    priceIcon.innerHTML = ''
    priceIcon.appendChild(priceIconElement)


}, 1500)
