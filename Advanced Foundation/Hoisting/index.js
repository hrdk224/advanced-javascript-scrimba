// --Hoisting & Temporal Dead Zone--
// TDZ starts here at the beginning of the block... 
//console.log(mylet); //ReferenceError: Cannot access 'myLet' before initialization
let mylet = "Hi there !";

//-- Hoisting with functions --
sayHi(); //Works! functions are hoisted entirely

function sayHi() {
    console.log("Hi!");
}
