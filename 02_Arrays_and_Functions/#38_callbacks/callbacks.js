// callback = a function passed as an argument to another function.
// một hàm được truyền dưới dạng đối số cho một hàm khác.

/**
 *  Ensures that a function is not going to run before a task is completed.
 *  Helps us develop asynchronous code.
 *  (when one function has to wait for another function) that helps us avoid errors
 *  and potential problems 
 *  Ex: Wait for a file to load
 * 
 * * Đảm bảo rằng một chức năng sẽ không chạy trước khi một nhiệm vụ được hoàn thành. Giúp chúng tôi phát triển mã không đồng bộ. (khi một chức năng phải đợi chức năng khác) giúp chúng tôi tránh lỗi và sự cố tiềm ẩn
  * Ví dụ: Đợi tệp tải
 *  
 */

// vấn đề:
// let total = sum(2, 4);
// displayDOM(total);

// function sum(x,y) {
//     let result = x + y;
//     return result
// }

// function displayConsole(output){
//     console.log(output)
// }


// function displayDOM(output){
//     document.getElementById("myLabel").innerHTML = output
// }

// cách xử lý

sum(2,3, displayDOM)

function sum (x, y, callBack){
    let result = x + y
    callBack(result)
}

function displayConsole(output){
    console.log(output)
}
function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output
}