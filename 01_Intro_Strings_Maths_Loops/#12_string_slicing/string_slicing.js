/**
 * slice() extracts a section of a string and return it as a new string,
 *          without modifying the original string
 */

let fullName = "Tuan Nguyen";

let firstName
let lastName

lastName = fullName.slice(5)
console.log(lastName)
firstName = fullName.slice(0)
console.log(firstName)


// slice(vị trí cắt, vị trí ngừng cắt)
// cắt chuỗi
// đếm từng phần tử Tuan Nguyen cắt từ chũ N 0: T 1: u 2:a,... 5:N

firstName = fullName.slice(0, fullName.indexOf(" "));
// cắt tại vị trí đầu tiên
lastName = fullName.slice(fullName.indexOf(" ") + 1)
// cắt tại vị trí dấu cách + 1



