// công thức tính cạnh huyền tam giác vuông c = căn bậc hai của a bình + b bình
// x = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2);) căn bậc 2 của a mũ 2 + b mũ 2

// let a = window.prompt("Enter side a")   
// // đang kiểu chuỗi
// a = Number(a)
// // chuyển thành kiểu số
// let b = window.prompt("Enter side b")   
// // đang kiểu chuỗi
// b = Number(b)
// // chuyển thành kiểu số

// let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

// console.log("slide c ",c)

// document.querySelector("#result").innerHTML = c.value

let a, b, c

document.querySelector("#submit").onclick = function(){
    a = document.querySelector("#aText").value
    a = Number(a)
    b = document.querySelector("#bText").value
    b = Number(b)

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    document.querySelector("#cLabel").innerHTML = "slice C:" + c
    // tại sao c không chấm value vì 
    // When setting the value of cLabel, the code tries to access c.value, but c is not an object with a value property. c is a number, so you can simply concatenate it with the rest of the string:
}