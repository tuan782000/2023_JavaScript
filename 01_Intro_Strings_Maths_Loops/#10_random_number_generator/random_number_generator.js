
// đầu tiên Math.random() để lấy số ngẫu nhiên
// Nhân cho sáu để vì phép nhân math random luôn từ 0 đến 0.999 mà x 6 thì luôn luôn < 6
// sau đó làm tròn số đó lên || số đó là số lấy được từ random sau khi nhân || kq lớn nhất là 5
// Mà xí ngầu có 6 nút vì vậy + thêm 1 cuối cùng


let x;
let y;
let z;
document.getElementById("rollButton").onclick = function (){

    x = Math.floor(Math.random() * 6) + 1
    y = Math.floor(Math.random() * 6) + 1
    z = Math.floor(Math.random() * 6) + 1
    
    document.getElementById("xLabel").innerHTML = x
    document.getElementById("yLabel").innerHTML = y
    document.getElementById("zLabel").innerHTML = z
}