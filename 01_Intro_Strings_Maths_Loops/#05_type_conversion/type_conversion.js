/**
 * Type Conversion = change the datatype of a value to another (string, numbers, booleans)
 * chuyển đổi loại = thay đổi kiểu dữ liệu của một giá trị khác
 */

let age = window.prompt("How old are you?");

// vấn đề ở đây là prompt là cho ra kiểu chuỗi, vì vậy biến age khi ++ thì nó ra là chuỗi không đúng với yêu cầu
// có thể kiểm tra kiểu dữ liệu
console.log(typeof age)
// kiểu nó là string

// biến đổi kiểu dữ liệu
age = Number(age);
//  lúc này age đã được gán lại thành kiểu số
age++;

console.log("Happy birthday! You are ",age, " years old")
// đúng kq


// ví dụ 2

let x
let y
let z

x = Number("3.14")
// đã gán cho x có giá trị là số nguyên, mặc dù khai báo trong ngoặc là string nhưng lúc in ra vẫn là số nguyên
//Kiểm tra kq 
// Một vài lưu ý nếu mà khai báo số mà truyền chuỗi thì kiểu dữ liệu vẫn là số, nhưng kq in ra là NaN: giá trị trả về từ một biểu thức mà kết quả là số không được xác định (undefined numerical)
console.log(x, typeof x);


y = string(3.14)
// mặc dù giá trị truyền vào là số, nhưng gán lại là chuỗi vì vậy y bằng chuỗi có giá trị 3.14
// kết qủa
console.log(y, typeof y);

z = Boolean("Pizza")
console.log(z, typeof z);
//  tương tự cách giải thích trên nhưng
// kết quả là false nếu rỗng, true nếu có bất kỳ chữ hoặc số