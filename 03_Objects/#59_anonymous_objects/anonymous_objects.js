/**
 * anonymous objects = Objects without a name Not directly referenced Less syntax. No need for unique names
 * đối tượng ẩn danh = đối tượng không có tên Không được tham chiếu trực tiếp Ít cú pháp. Không cần tên duy nhất
 */

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

let cards = [
    new Card("A", "Hearts"),
    new Card("A", "Hearts"),
    new Card("A", "Spades"),
    new Card("A", "Diamonds"),
    new Card("A", "Clubs"),
    new Card("2", "Hearts"),
    new Card("2", "Spades"),
    new Card("2", "Diamonds"),
    new Card("2", "Clubs"),
];

console.log(cards[0].value + " " + cards[0].value);

cards.forEach((card) => console.log(`${card.value} ${card.suit}`));
