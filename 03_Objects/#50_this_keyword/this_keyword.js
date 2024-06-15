/**
 * this = reference to a particular object
 *        the object depends on the immediate context
 *        
 * 
 *        tham chiếu đến một đối tượng cụ thể,
 *        đối tượng phụ thuộc vào ngữ cảnh trực tiếp
 */

// ví dụ nếu không dùng this || model được dùng thẳng vào luôn trong hàm thì chắc chắn bị lỗi chưa được định nghĩa
// có lỗi dòng 18 model
// const car1 = {
//     model: "Mustang",
//     color: "red",
//     year: 2023,

//     drive: function(){
//         console.log(`You drive the car ${model}`)
//     },
//     brake: function(){
//         console.log("You step on the brakes") 
//     },
// }
// // có lỗi dòng 31 model
// const car2 = {
//     model: "Corvette",
//     color: "blue",
//     year: 2024,

//     drive: function(){
//         console.log(`You drive the car ${model}`)
//     },
//     brake: function(){
//         console.log("You step on the brakes") 
//     },
// }

// Sửa lỗi bằng cách dùng this để cho tham chiếu đến đối tượng cụ thể và dựa vào ngữ cãnh để phân biệt
const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function(){
        console.log(`You drive the car ${this.model}`)
    },
    brake: function(){
        console.log("You step on the brakes") 
    },
}

const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: function(){
        console.log(`You drive the car ${this.model}`) // this là cái này model thuộc car2, this.model của car2
    },
    brake: function(){
        console.log("You step on the brakes") 
    },
}

car1.drive()
car2.drive()