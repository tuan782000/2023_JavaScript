/**
 * ternary operator = Shortcut for an 'if/else' statement
 * Toán tử bậc 3
 *                     Take 3 operands
 *                      1. a condition width ?
 *                      2. expression if True :
 *                      3. expression if False
 * condition ? exprIfTrue :  exprIfFalse
 */

let adult = checkAge(21);

// cách if else bình thường
// function checkAge(age) {
//     if(age >= 18){
//         return true
//     }else {
//         return false
//     }
// }

//  cách ứng dụng trong bài học này
function checkAge (age) {
    return age >= 18 ? true : false
}

console.log(adult)

checkWinner(true)

function checkWinner(win){
     win ? console.log("You wind") : console.log("You lose")
}