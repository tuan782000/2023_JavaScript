const promise1 = Promise.resolve("This is promise 1")
const promise2 = 20
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, reject)
})

Promise.all([promise1, promise2, promise3]).then(val => console.log(val))

// Promise.all nó sẽ chờ thằng lâu nhất xong rồi mới trả kết quả