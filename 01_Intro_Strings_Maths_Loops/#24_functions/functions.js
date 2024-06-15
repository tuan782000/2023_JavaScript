/**
 * function = Define code once, and use it many times
 *            To perform some code, call the function name
 */

function startPrograming(){
    let userName = "tuan"
    let age = 21

    musicHappyBirthDay(userName, age)
}


function musicHappyBirthDay (userName, age) {
    console.log("Happy birthday to you")
    console.log("Happy birthday to you")
    console.log("Happy birthday dear", userName)
    console.log("Happy birthday to you")
    console.log("You are ", age, " years old")
}

startPrograming()
