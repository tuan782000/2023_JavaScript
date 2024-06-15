/**
 * Gives us the ability to check more than 1 condition concurently
 * && AND (Both conditions must be true)
 * || OR (Either condition can be true)
 */

let temp = 15;

// toán tử && buộc cả hai hoặc các tham số truyền bào phải thỏa mãn điều kiện hết thì mới thực hiện hành động bên trong
if(temp > 0 && temp < 30) {
    console.log("The weather is good")
}else {
    console.log("The weather is bad")
}

// toán tử || hoặc Or thì chỉ cần 1 cái đúng các cái còn lại sai vẫn chấp nhận

if(temp <= 0 || temp >= 30) {
    console.log("The weather is bad")
}else{
    console.log("The weather is good")
}