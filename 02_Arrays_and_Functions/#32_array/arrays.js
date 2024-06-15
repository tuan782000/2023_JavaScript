/**
 * array = think of it as a variable
 *          that can store multiple values
 */

let fruits = [
    "apple",
    "banana",
    "orange",
]

console.log(fruits)
// có độ dài mãng là 3
// máy tính luôn bắt đầu số 0 vì vậy mãng này 0 1 2 phần tử

console.log(fruits[0])
// apple


// ngoài ra ta có thể thay thế một phần từ cũ bằng một phần tử mới nếu như là let

// fruits[2] = "coconut";

// Thêm một phần tử khác vào mãng
fruits.push("mango")

fruits.pop() // xóa phần tử cuối của mãng
fruits.unshift("lemon") // thêm một phần tử vào đầu mãng
fruits.shift(); // Xóa phần tử đầu tiên của mãng


let length = fruits.length;
console.log(length); // Đếm độ dài mãng hiện tại

let index = fruits.indexOf("apple")
console.log(index)
// Tìm vị trí đứng của phần tử trong một mãng
// Ví dụ nếu không có phần tử trong mãng thì kq -1
