//useful string properties & methods

let username = "Tuan"

let nameLength =  username.length;
console.log(nameLength)
// or || same
console.log(username.length)

console.log(username.charAt(0))
// kq: T
// chatAt lấy ra 1 phần tử trong chuỗi

console.log(username.indexOf("T"))
// kq: 0
// Index of xác định vị trí phần tử
console.log(username.lastIndexOf("T"))
// kq: 0
// Last index of tìm ra phần tử cuối cùng khác indexof

console.log(username.trim)
// loại bỏ khoảng trắng đầu và đuôi

console.log(username.toUpperCase)
// viết hoa
console.log(username.toLowerCase)
// viết thường

let phone = 123-456-789
phone.replaceAll("-", "/")
console.log(phone)