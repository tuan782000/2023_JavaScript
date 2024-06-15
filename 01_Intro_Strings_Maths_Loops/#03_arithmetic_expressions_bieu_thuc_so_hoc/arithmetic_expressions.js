/**
 * article expression is a combination of... 
 * operands (values, variables, etc,..)
 * operators( + - * / %)
 * that can be evaluated to a value
 * ex: y = x + 5
 */

let a = 6
let b = 10

let c = a + b

console.log(c)

let students = 20
// students = students + 1
// students = students - 1
// students = students * 2
// students = students / 2
// students += 2
// students -= 2
// students *= 2
// students /= 2
students++
console.log(students);

let extraStudents = students % 2
console.log(extraStudents);
// chia lấy dư

/**
 *  operator precedence || mức độ ưu tiên thực hiện
 * 1. parenthesis(): ngoặc
 * 2. exponents: số mũ
 * 3. multiplocation & division: nhân hoặc chia
 * 4. addition & subtraction: cộng trừ
 */

let results = 1 + 2 * (3 + 4)

console.log(results)
// 15



