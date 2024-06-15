/**
 * setTimeOut() = invokes a function after a number of milliseconds: gọi một chức năng sau một số mili giây
 *                asynchronous function (doesn't pause execution): chức năng không đồng bộ (không tạm dừng thực thi)
 */

/**
 * Giải thích các thầy FPT 
 * 
 * Đồng bộ là thực hiện từ trên xuống dưới tất cả các hàm, nhưng khi gặp setTimeout setInterval ... Những thằng này là hàm
 * bất đồng bộ
 * 
 * chương trình sẽ ưu tiên chạy các hàm đồng bộ, các thằng bất đồng bộ sẽ chạy sau cùng.
 * Thứ tự chạy của bất đồng bộ là thằng nào xong trước thằng đó chạy trước.
 * 
 * 
 * 
*/

let item = "crytocurrency";
let price = "420.69"

let timer1 = setTimeout(firstMessage, 3000 , item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage () {
    alert(`Buy this ${item} for $${price}`)
}
function secondMessage () {
    alert(`This is not a scam`)
}
function thirdMessage () {
    alert(`DO ITTT!`)
}


document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);

    alert("Thanks for buying")
}