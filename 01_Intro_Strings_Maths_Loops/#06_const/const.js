// const = a variable that can't be changed

// tính chu vi hình tròn: C = 2 * số PI * bán kính

const PI = 3.14 // Số này không thể bị thay đổi
let radius;
let cicrumference;

radius = window.prompt("Enter the radius of a cricle");
radius = Number(radius);

// PI = 33122 cố tình sử dụng tên đã khai báo const thì sẽ là sai

cicrumference = 2 * PI * radius

console.log("The cicrumference is ", cicrumference);