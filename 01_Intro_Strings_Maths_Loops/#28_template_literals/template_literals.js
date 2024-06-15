/**
 * Template literals = delimited with (`)
 *                      instead of dobule or single quotes
 *                      allows embedded variables and expressions
 * 
 * */


let userName = "Bro";
let item = 3;
let total = 75;


// cách 1
// console.log("Hello", userName);
// console.log("You have", item, "items in your cart");
// console.log("Your total is $", total);


// cách 2:
console.log(`Hello ${userName}`);
console.log(`You have ${item} in your cart`);
console.log(`Your total is $${total}`);

// cách 3:
let text = `
Hello ${userName} <br>
You have ${item} in your cart <br>
Your total is $${total}
`;

console.log(text)

document.getElementById("myLabel").innerHTML = text;