// Math is an intrinsic object that provides basic mathematics functionality and constants. là một đối tượng nội tại cung cấp các hằng số và chức năng toán học cơ bản.

let x = 3.14    
// floor
x = Math.floor(x)
console.log(x)
// kq: 3 || nếu x 3.49 trở xuống|| làm tròn xuống
x = Math.ceil(x)
console.log(x)
// kq: 4 || nếu x 3.5 trở lên || làm tròn lên
x = Math.pow(x, 2); // số mũ || 2 là giá trị số mũ
// kq: 9.865
x = Math.sqrt(x, 2) // căn bậc 2
console.log(x)
// kq: 1.77
x = Math.abs(x) // trị tuyệt đối
// kq: 3.14 || nếu là số âm thành số dương



let a = 5 
let b = 6; 
let c = 7;

let maximum;
let minimun;

maximum = Math.max(a, b, c)
maximum = Math.min(a, b, c)

console.log(maximum)
// kq: 7
console.log(miniimum)
// kq: 5

// Tạo ra số PI

let z = Math.PI

console.log(z)
// kq: 3.14....