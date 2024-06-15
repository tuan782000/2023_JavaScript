/**
 * array.forEach() = executes a provided callback function once for each array element
 * 
 * thực thi chức năng gọi lại được cung cấp một lần cho mỗi phần tử mảng
 * 
 */

let students = ["tuan", "nguyen", "quan"] // một mãng có 3 phần tử

students.forEach(capitalize); // vòng lặp forEach để gọi hàm
students.forEach(print) // 


function capitalize(element, index, array){ // truyền zo element, thứ tự, mãng
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){ // truyền thành phần vào function
    console.log(element) // in ra element
}

console.log(students[0]);