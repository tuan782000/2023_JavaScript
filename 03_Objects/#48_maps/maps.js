//Map = object that holds key-value pairs of any data type
//      đối tượng chứa các cặp khóa-giá trị của bất kỳ loại dữ liệu nào

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 55],

]);

// Khai báo một biến store
// new Map chứa mãng, mãng này chứa các mãng con, mãng con chứa các cặp key và value
// ["key", value]


store.forEach((value, key) => console.log(`${key} $${value}`));
// dùng vòng lặp forEach lặp qua store (trong này là arrow function, giá trị được truyền vào là value và key hàm này có nhiệm vụ in ra các cái key và value lặp ra được)

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");
console.log(shoppingCart)

// lưu ý là store này là biến được khai báo
/**
 *  ngoài
 *  store.get:lấy trong store
 * còn có
 *  store.set("hat", 40): set-up lại trong store, thêm vào trong store
 *  store.delete("hat"): xóa hat khỏi store
 *  store.has("underwear"): kiểm tra có tồn tại trong store không || kết quả trả về true hoặc false
 *  store.size: kiểm tra size của mãng như ví dụ trên là 4
 * */ 
