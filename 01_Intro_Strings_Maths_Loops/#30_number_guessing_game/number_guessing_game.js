const answer = Math.floor(Math.random()*10+1) // random ra 1 số bí ẩn để người chơi đoán
let guesses = 0; // số lần chọn, hiện tại là 0

document.getElementById("submitButton").onclick = function (){
    let guess = document.getElementById("guessField").value // lấy giá trị người dùng điền
    guesses++ // đếm số lần đoán + 1 mỗi khi người dùng click submit

    if(guess == answer) {
        alert(`${answer} is the #. It took you ${guesses} guess`) 
    }else if(guess < answer) {
        alert('Too small')
    }else{
        alert("too large")
    }
}