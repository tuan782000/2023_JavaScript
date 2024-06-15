/**
 * error = object with a description of || đối tượng có mô tả về
 *         something went wrong ||  đã xảy ra sự cố
 *         Can't open a file || Không thể mở một tập tin
 *         Lose connection || Mất kết nối
 *         User types incorrect input || Người dùng nhập sai thông tin
 *         typeError || gõ Lỗi
 * 
 */

// sử dụng try catch để bắt lỗi

try {
    // console.lag() // này sai, chương trình sẽ nhảy zo catch và bắt lỗi nói đây không phải 1 function
    let x = window.prompt("Enter a #")
    x = Number(x)

    if(isNaN(x)) throw "That wasn't a number!"
    if(x == "") throw "That was empty!"

    console.log(`${x} is a number`)
} catch (error) {
    console.log("error", error)
}

finally{ //Điều này luôn luôn thực hiện || mặc kệ try và catch
    console.log("This always execute")
}