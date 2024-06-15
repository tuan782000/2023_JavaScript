/**
 * spread operator = allows an interable such as an
 * ...               array or string to be expanded 
 *                   in places where zero to more 
 *                   arguments are expected 
 *                   (unpacks the element)
 * 
cho phép mở rộng một khả năng tương tác chẳng hạn như một mảng hoặc chuỗi ở những nơi dự kiến ​​sẽ có từ 0 đến nhiều đối số hơn (giải nén phần tử)
 */

let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers) // cho ra một mãng, trong đó có 9 phân tử
console.log(...numbers); // phá bỏ cái mãng, có 9 số 

let username = "Tuan"
console.log(...username)

let maximum = Math.max(...numbers);
console.log(maximum)


let class1 = ["tuan","nguyen","trung"]
let class2 = ["duoc","anh","mi"]

class1.push(...class2)
console.log(class1)// show ra mãng này (6) ['tuan', 'nguyen', 'trung', 'duoc', 'anh', 'mi']
// Nhưng muốn show thẳng tê
console.log(...class1) //kq: tuan nguyen trung duoc anh mi