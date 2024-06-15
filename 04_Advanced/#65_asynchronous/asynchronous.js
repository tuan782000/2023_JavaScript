/**
 *
 * synchronous code = In an ordered sequence. Trong một trình tự có thứ tự.
 * mã đồng bộ         Step by step linear instructions thực hiện từng bước từng bước một theo tuyến tính
 *                    (start now, finish now) Bắt đầu ngay, kết thúc ngay
 *
 * asynchronous code = Out of squence. Ngoài trình tự.
 * mã không đồng bộ    Ex. Access a database: một vài ví dụ biến mã đồng bộ thành bất đồng bộ ví dụ: Truy cập cơ sở dữ liệu
 *                         Fetch a file: Lấy một tập tin
 *                         Task that take time Nhiệm vụ mất thời gian
 *                         (start now, finish sometime later) Bắt đầu ngay và kết thúc sau
 *
 */

// ví dụ về synchronous code mã đồng bộ
console.log("Hello, START");
console.log("This is synchronous"); // làm bước nào xong bước đó rồi mới chạy bước tiếp theo
console.log("GOOD BYE, END");
// kết quả: Hello, START || This is synchronous || GOOD BYE, END

// ví dụ về asynchronous code mã không đồng bộ
console.log("Hello, START");
setTimeout(() => console.log("this is asynchronous"), 5000);
console.log("GOOD BYE, END");
// Kết quả là Hello, START || GOOD BYE, END || (sau 5s) this is asynchronous


/**
 * setTimeout là hàm bất đồng bộ
 * setIntervel
 * ....
 */

