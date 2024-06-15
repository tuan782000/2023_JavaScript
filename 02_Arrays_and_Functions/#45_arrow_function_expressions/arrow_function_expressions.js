/**
 * arrow function: hàm mũi tên
 *
 * compact alternative to a traditional function expression
 * thay thế nhỏ gọn cho một hàm(chức năng) truyền thống
 */

// hàm bình thường
// const greeting = function(userName){
//     console.log(`hello ${userName}`)
// }

// greeting("Tuan");

// arrow function

const greeting = (userName) => console.log(`Hello ${userName}`);

greeting("Tuan");

//  trường hợp nếu có mỗi 1 tham số truyền vào thì có thể bỏ ngoặc. Lưu ý 2 trở lên thì phải có ngoặc tròn

const persent = (x, y) => (x / y) * 100;

console.log(`${persent(20, 40)}%`)


let grades = [100, 50, 90, 60, 80, 70]
//descending: giảm dần
grades.sort((x,y) => y - x);
grades.forEach((element) => console.log(element))