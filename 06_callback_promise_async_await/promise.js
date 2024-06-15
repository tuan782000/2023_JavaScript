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

const createUser = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error: something went wrong");
            }
        }, 2000)
    })
}

createUser({
    name: 'John',
    email: 'js@example.com',
    phone: '0994567812'
})
    .then(getUser)
    .catch(err => console.log(err))

/**
 * Tóm tắt
 * Promise nó 2 trạng thái resolve và reject,
 * 
 * Viết ra cái hàm.
 * Trong sẽ thực hiện cái logic, sau đó kiểm tra logic nếu đúng thì resolve và nếu sai thì reject
 * 
 * Khi mà sử dụng 2 hàm cùng lúc createUser thì thành công .then gọi tiếp hàm tiếp theo, trong quá trình đó có lỗi sẽ dùng catch
*/