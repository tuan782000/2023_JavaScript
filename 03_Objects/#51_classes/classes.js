/**
 * class = a blueprint for creating objects define whar properties and methods they have use a constructor for unique properties
 * 
 * một kế hoạch chi tiết để tạo các đối tượng xác định các thuộc tính và phương thức whar mà chúng có sử dụng hàm tạo cho các thuộc tính duy nhất
 */

class Player {
    score = 0;
    pause(){
        console.log("You pause the game")
    }
    exit(){
        console.log("You exited the game")
    }
}

const player1 = new Player();
const player2 = new Player();

console.log(player1.score);
console.log(player2.score);
// kq: 0

player1 += 1
console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();

