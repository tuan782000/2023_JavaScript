// The Date objects is used to work with dates & times


let date = new Date();


console.log(date)

let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let moth = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// Ngoài ra có thể dùng set để đặc lại mặc định
// date.setFullYear(2024);
// date.setMonth(11);
// date.setDate(31);
// date.setHours(23);
// ... tương tự trên




document.getElementById("myLabel").innerHTML = date
document.getElementById("myLabel1").innerHTML = year

// custom format: xây dựng lại cách thức hiển thị ngày giờ
function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth()+1; //lý do month + thêm 1 vì mãng tháng có 11 phần tử 1 đến 12, thứ tự 0 tương ứng tháng 1 và 11 tương ứng với 12 nên vậy + thêm 1 để không bị hụt
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPM = hours >= 12 ? "pm" : "am"

    hours = (hours % 12) || 12;
    
    return `${hours}: ${minutes}: ${seconds}: ${amOrPM}`
}

document.getElementById("myLabel2").innerHTML = formatDate(date)
document.getElementById("myLabel3").innerHTML = formatTime(date)


date = date.toLocaleString(); // toLcaleString giúp chuyển date thành string, giúp đọc được dưới dạng chuỗi
console.log(date)