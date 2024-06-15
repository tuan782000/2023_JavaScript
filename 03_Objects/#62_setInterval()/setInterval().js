/**
 * setInterval() = invokes a function repeatedly after a number of miili seconds || gọi lại một chức năng sau một số miili giây
 *                 asynchronous function (doesn't pasuse execution) || chức năng không đồng bộ (không tạm dừng thực thi)
 * 
 * 
 */

let count = 0;
let max = window.prompt("Count up to what #?")

max = Number(max)

const myTimer = setInterval(countUp, 1000); // setInterval gọi hàm sau 1 khoảng thời gian xác định, thời gian này được set

function countUp(){
    count++
    console.log(count)
    if(count >= max) {
        clearInterval(myTimer); // xóa setInterval của hàm được gọi đi khi đủ điều điều kiện
    }
}