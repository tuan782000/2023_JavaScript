// const users = [
//     { name: 'Tuan', phone: '0778748900', email: 'thaituan8907@gmail.com' },
//     { name: 'Nguyen', phone: '0778748901', email: 'thainguyen8007@gmail.com' },
//     { name: 'Thai', phone: '0778748902', email: 'thai8900@gmail.com' },
// ]

// const getUser = () => {
//     setTimeout(() => {
//         let outPut = '<h2>Users</h2>'
//         users.forEach(user => {
//             const { name, phone, email } = user; // destructuring 
//             outPut += `
//                 <ul>
//                     <li>${name}</li>
//                     <li>${phone}</li>
//                     <li>${email}</li>
//                 </ul>
//             `
//         })
//         document.getElementById('outPut').innerHTML = outPut;
//     }, 1000)
// }

// getUser()

// const createUser = (user) => {
//     setTimeout(() => {
//         users.push(user);
//     }, 2000)
// }


// createUser({ name: 'John', email: 'js@example.com', phone: '0994567812' })

/*
Mô tả vấn đề gặp phải:

Đầu tiên bạn có users là 1 mảng danh sách các đối tượng là users

Bạn khai báo 1 hàm getUser và hàm này nó tốn 1s để thực hiện và in ra kết quả ra màn hình

Bạn có 1 hàm khác createUser và hàm này nó tốn tận 2s để thực hiện.

Kết quả khi bạn gọi hàm getUser, thì hàm createUser không được thực hiện.

Lý do, khi getUser thực hiện xong 1s thì createUser vẫn còn đang xử lý. Điều dẫn đến việc bất đồng bộ trong khâu xử lý

Vậy có cách nào giải quyết vấn đề này không? có, sử dụng callbacks
*/


// Giải quyết vấn đề

const users = [
    { name: 'Tuan', phone: '0778748900', email: 'thaituan8907@gmail.com' },
    { name: 'Nguyen', phone: '0778748901', email: 'thainguyen8007@gmail.com' },
    { name: 'Thai', phone: '0778748902', email: 'thai8900@gmail.com' },
]

const getUser = () => {
    setTimeout(() => {
        let outPut = '<h2>Users</h2>'
        users.forEach(user => {
            const { name, phone, email } = user; // destructuring 
            outPut += `
                <ul>
                    <li>${name}</li>
                    <li>${phone}</li>
                    <li>${email}</li>
                </ul>
            `
        })
        document.getElementById('outPut').innerHTML = outPut;
    }, 1000)
}


const createUser = (user, callbacks) => {
    setTimeout(() => {
        users.push(user);
        callbacks();
    }, 2000)
}


createUser({ name: 'John', email: 'js@example.com', phone: '0994567812' }, getUser)

/**
 * Giải thích:
 * 
 * Vì createUser tạo ra sẽ tốn thời gian hơn cho nên mình sẽ dùng kỹ thuật callbacks để đưa hàm getUser vào làm callbacks cho hàm createUser
 * 
 * ví dụ: cú pháp: createUser({object}, function) hàm createUser nhận vào 1 object và 1 function
 * 
 * const createUser = (object, callbacks) => {
 *  // xử lý logic thêm user
 *  // sau đó thực hiện gọi callbacks() để lấy ra danh sách
 * }
 * 
 */

/**
 * Nhược điểm của cách này bị callback hell, các callbacks lồng nhau quá nhiều? Vậy có cách nào để tối ưu hơn không? Có
 * 
 * Từ lúc es6 ra đời 2015 cung cấp Promise và Asnyc/Await 2017
 * */ 