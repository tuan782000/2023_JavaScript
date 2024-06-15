// shuffle: xáo trộn mãng

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

console.log(cards) //in ra nguyên mãng sau khi random
console.log(cards[0]) //in ra phần tử đầu tiên sau random
// phá bỏ khỏi mãng bằng forEach
cards.forEach(card => console.log(card)); //Lặp qua mãng để in ra toàn bộ sau khi random

function shuffle(array) {
    // current Hiện tại
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * array.length)
        currentIndex--
    

        let temp = array[currentIndex]
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}
