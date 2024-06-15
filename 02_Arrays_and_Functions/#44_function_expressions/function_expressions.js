/**
 * function expression = function without a name (anonymus function) avoid polluting the global scope with names
 *                       write it, then forget about it
 * 
 *  Hàm không có tên (hàm ẩn danh) tránh làm ô nhiễm phạm vi toàn cầu với tên viết nó, sau đó quên nó đi
 */

// 1 hàm bình thường
// function sayHello (){
//     console.log("Hello!")
// }

// sayHello();


// cách làm function không tên
// const greeting = function(){
//     console.log("Hello")
// }

// greeting()

// cách làm với hàm có tên
// let count = 0

// function increaseCount(){
//     count++
//     document.getElementById("myLabel").innerHTML = count
// }

// function decreaseCount(){
//     count--
//     document.getElementById("myLabel").innerHTML = count
// }


// cách làm với hàm không tên 
let count = 0
document.getElementById("increaseButton").onclick = function(){
    count++
    document.getElementById("myLabel").innerHTML = count
}
document.getElementById("decreaseButton").onclick = function(){
    count--
    document.getElementById("myLabel").innerHTML = count
}

