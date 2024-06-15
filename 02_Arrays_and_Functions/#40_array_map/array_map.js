/**
 * array.map() = executes a provided callback function
 *               once for each array element
 *               And creates a new array
 * 
 *          Thực thi hàm gọi lại được cung cấp một lần cho mỗi phần tử mảng Và tạo một mảng mới
 */

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

cubes.forEach(print)

function square(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3)
}

function print(element) {
    console.log(element)
}

