// array.reduce() = reduce an array to a single value. //giảm một mảng thành một giá trị

/**
 * Ghi chú
Ở lần gọi lại đầu tiên, không có giá trị trả về từ lần gọi lại trước đó.

Thông thường, phần tử mảng 0 được sử dụng làm giá trị ban đầu và quá trình lặp bắt đầu từ phần tử mảng 1.

Nếu một giá trị ban đầu được cung cấp, giá trị này sẽ được sử dụng và quá trình lặp lại bắt đầu từ phần tử mảng 0.
 */

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`)

function checkOut(total, element){
    return total + element
}