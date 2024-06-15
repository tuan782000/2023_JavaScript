// 1. Block Scope
// {
//     const a = 1;
//     console.log(a);
// }

// a bên ngoài không dùng được

// console.log(a); // a này xuất lỗi chưa được định nghĩa, vì thành phần này không thể truy cập vào block scope

// 2. function scope

// const a = 1; // global scope
// function outer() {
//     const b = 2;
//     function inner() {
//         const c = 3;
//         console.log(a,b,c)
//     }
//     inner();// gọi hàm inner trong hàm outer để chạy
// }

//console.log(a); // 1
//console.log(b); // không được, báo lỗi vì b nằm trong b outer và nó là function scope và b bên ngoài là thành phần ngoại lai không truy cập được

//outer();// 1, 2, 3

// nguyên nhân khi gọi outer thì inner cũng được gọi

// tại sao a và b sử dụng được trong inner vài inner nằm trong scope của 2 thằng b và a. Cho nên nó thể vào được. Lưu ý ngược lại thì sẽ không được (chui vào không ra được)


// closures
const outer = () => {
    let counter = 0;
    const inner = () => {
        counter++ ;
        console.log(counter)
    }
    inner();
}

outer();//1
outer();//2
outer();//3