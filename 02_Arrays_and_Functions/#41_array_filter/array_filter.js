/**
 * array.filter() = create a new array with all elements that pass the test provided by a function
 */

let ages = [18, 16, 19, 21, 17, 90]; //Bước 1
let adults = ages.filter(checkAge); // Bước 3
//khai báo biến adults gán cho nó là giá trị ages.filter(giá trị của hàm checkage trả về)
adults.forEach(print) // Bước 5

function checkAge (element) { //Bước 2
    return element >= 18;
}

function print(element) { //Bước 4
    console.log(element)
}


// Kết quả in ra là 18 19 21 90

// Bước 1: tạo ra biến lưu mãng cần filter
// Bước 2: Viết hàm filter
// Bước 3: tạo một biến chứa các dữ liệu sau khi được filter
// Bước 4: Viết hàm in kết quả
// Bước 5: viết cú pháp để lặp ra các kết quả tìm được