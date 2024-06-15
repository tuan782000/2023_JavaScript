/**
 * nested functions = functions inside other functions
 *                    Outer functions have access to inner function
 *                    Inner functions are "hidden" from outside the outer functions.
 *                    used in closures (future video topic)
 */

let userName = "Tuan";

let userInbox = 0;

login()

function login(){ // Hàm lồng hàm
    displayUserName();
    displayUserInbox();
}

function displayUserName(){
    console.log(`welcome ${userName}`)
}

function displayUserInbox(){
    console.log(`You have ${userInbox} new message`)
}


// Hàm mà viết trong hàm thì khi gọi hàm phải gọi đúng bậc
// Ví dụ: hàm lồng hàm thì gọi trong hàm lồng chứ không gọi phía ngoài vì nó không hiểu