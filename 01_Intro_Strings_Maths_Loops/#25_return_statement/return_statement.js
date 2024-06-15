/**
 * return = returns a value back to the place where you invoked a function
 * 
 */

let area;
let width;
let height;

width = window.prompt("Enter witdh");
height = window.prompt("Enter height");

area =getArea(width, height);

function getArea(width, height){
    // cách 1:
    // let result = width * height;
    // return result
    // cách 2:
    return width * height;;
}

console.log("The area is: ", area)