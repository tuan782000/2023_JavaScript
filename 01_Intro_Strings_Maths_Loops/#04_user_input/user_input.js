// How to accept user input


// Easy way with a window prompt
// let username = window.prompt("What is your name?");
// console.log(username)

// propmpt: mở ra cái hộp thoại cho phép người dùng điền thông tin, 
// trong trường hợp này là nhập xong lưu trữ nó vào biến username


// Ngoài ra chúng ta có thể dùng biến được lưu giá trị và sử dụng lại nó trong trường hợp này là sử dụng console.log

// sử dụng in ra HTML

// DFFICULT WAY HTML text box

let user;
// document.getElementById("myButton").onclick = function(){
//     user = document.getElementById("myText").value;
//     console.log(user);
//     document.getElementById("myLabel").innerHTML = user
// }

// Cách 2:
document.querySelector("#myButton").onclick = function(){
    user = document.querySelector("#myText");
    console.log(user.value)
    document.querySelector("#myLabel").innerHTML = user.value
}

// nên nhớ nếu dùng queryselector thì lúc trả kết quả nên có ||.value