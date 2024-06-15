/**
 * The idea behind a module is that it's a file of reusable code 
 * 
 *      Ý tưởng đằng sau một mô-đun là nó là một tệp mã có thể tái sử dụng
 * 
 * we can import sections of pre-written code to use whenever
 * 
 *      chúng ta có thể nhập các đoạn mã viết sẵn để sử dụng bất cứ khi nào
 * 
 * Great for any general utility values and functions
 * 
 *      Tuyệt vời cho mọi giá trị và chức năng tiện ích chung
 * 
 * Helps to make your code more reusable and maintanable
 * 
 *      Giúp làm cho mã của bạn có thể tái sử dụng và bảo trì nhiều hơn
 * 
 * Think of modules as seperate chapters of a book
 * 
 *      Hãy nghĩ về các mô-đun như các chương riêng biệt của một cuốn sách
 */

import { PI, getCircumference, getArea } from "./math_util.js";

console.log("Số PI là: ",PI)

console.log("Chu vi hình tròn là: ",getCircumference(6))

console.log("Diện tích hình tròn là: ",getArea(6))

let circumference = getCircumference(10);
console.log(circumference)
let area = getArea(10);
console.log(area)