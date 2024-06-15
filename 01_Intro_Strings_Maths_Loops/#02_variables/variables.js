/**
 * A variable is a container for storing data: (storing data) lưu trữ dữ liệu
 * 
 * a variable is behaves as if it was the value that is contains
 * một biến hoạt động như thể nó là giá trị chứa
 * 
 * two steps:
 * 1. Declaration (var let const)
 * 2. Assignment: phân công (Assignment operator)
 * 
 * 
 */


var fullName = "Nguyen Thai Tuan"

let age = 22;

const student = true

let a = 10

const b = false

console.log(fullName, a, b)

a = a + 1

console.log(a)


// Nhưng khi mà chuỗi + số luôn luôn là chuỗi ví dụ

let c = "11"

c = c + 1

console.log(c)
// kq: 111

// Các lưu ý chuỗi thì luôn đặt trong dấu ngoặc
// kiểu số nguyên hoặc boolean thì không cần có dấu ngoặc

console.log("Hello", fullName)
console.log("You are", age, "years old")
console.log("Enrolled: ", student)


// DOM
document.getElementById("p1").innerHTML = "Hello " + fullName;
document.getElementById("p2").innerHTML = "You are "+ age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;