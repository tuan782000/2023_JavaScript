/**
 * promise = object that encapsulates the result of an asynchronous operation let asynchronous methods return values like
 * asynchronous methods "I promise to return something in the future"
 *
 * đối tượng đóng gói kết quả của một hoạt động không đồng bộ, hãy để các phương thức không đồng bộ trả về các giá trị như các phương thức không đồng bộ "Tôi hứa sẽ trả lại một cái gì đó trong tương lai"
 *
 * encapsulates: đóng gói
 * operation: hoạt động
 *
 * resolve: giải quyết
 * reject: từ chối
 *
 *
 * thành công đi chung với resolve,
 * Thất bại đi chung với reject
 */

/**
 *   The STATE is 'pending' then: 'fulfilled' or 'rejected': STATE là 'đang chờ xử lý' thì: 'đã hoàn thành' hoặc 'bị từ chối'
 *   the RESULT is what can be returned : KẾT QUẢ là những gì có thể được trả lại
 *   2 parts producing & consuming : 2 bộ phận sản xuất và tiêu thụ
 */

const promise = new Promise((resolve, reject) => {
    // khai báo biến promise = new Promise trong new Promise có 1 cái arrow function có 2 tham số resolve, reject tuyền vào. Ngoài ra trong hàm có lưu biến fileLoaded nếu true thì trả về kết quả File loaded cho thằng resolve và flase cho kết quả của thằng reject. Lưu ý chỉ được trả về 1 cái thành công hoặc thất bại
    let fileLoaded = true;

    if (fileLoaded) {
        resolve("File loaded");
    } else {
        reject("File NOT loaded");
    }
});

promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
// sau khi trả về cho biến promise thì sẽ bắt trường hợp then cho trường hợp thành công và catch cho trường hợp thất bại


// Viết một biến wait minh họa việc chờ, đầu tiên khai báo biến wait gán cho nó giá trị là một new Promise gọi arrow function với tham số truyền vào resolve và trong hàm này xử lý sau 3s trả về kết quả
const wait = time => new Promise (resolve => {
    setTimeout(resolve, time)
})

wait(3000).then(() => console.log("Thanks for watching!")) // gọi lại biến wait chấm tới then để bắt trường hợp thành công sau đó gọi arrow function để in ra Thanks for watching!
