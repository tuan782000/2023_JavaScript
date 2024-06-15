// rest_parameters = represents an indefinite number
// ...               of parameters
//                   (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e)); // tham số truyền vào là 5 số nên và có sử dụng các biến được gán giá trị thì
// numbers chỉ việc nhìn giống địa chỉ mà lấy vào để đưa vào danh sách

function sum(...numbers) { //...numbers lúc này là 1 2 3 4 5 || tại sao chỗ này là 1 2 3 4 5. vì nhìn dòng 11
    // console.log(...numbers)
    let total = 0; // gán số này = 0
    for (let number of numbers) { // thực hiện vòng lặp for of cho number chạy qua danh sách numbers
        total += number; // thực hiện phép tính tổng
    }

    return total; // trả về kết quả
}


