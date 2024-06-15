/**
 * get = binds an object property to a function when that property is accessed
 * lấy = liên kết một thuộc tính đối tượng với một chức năng khi thuộc tính đó được truy cập
 *
 * set = binds an object property to a function when that property is assigned a value
 * thiết lập = liên kết một thuộc tính đối tượng với một hàm khi thuộc tính đó được gán một giá trị
 */

class Car {
    constructor(power) {
        this._gas = 25;
        this._power = power;
    }
    get power() {
        return `${this._power}hp`;
    }
    get gas() {
        return `${this._gas}L (${(this._gas / 50) * 100}%)`;
    }
    set gas(value) {
        if (value > 50) {
            value = 50;
        } else if (value < 0) {
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);// 400 được truyền vào Car chạy vào hàm constructor, lúc này power được set lại 400 chạy hàm power,
// hàm power trả về giá trị và giá trị được in ra bởi console.log

car.gas = 1000; // ví dụ truyền vào giá trị 1000, truyền vào class car có hàm gas, value lúc này 1000, 
// thực hiện chức năng hàm và bắt đầu xét điều kiện value > 50 thỏa lúc này value sẽ được gán lại giá trị 50
// không còn dùng 1000

console.log(car.power);
console.log(car.gas);
