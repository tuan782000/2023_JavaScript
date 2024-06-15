/**
 * static = belong to the class, not the objects
 *          properties: useful for caches, fixed-configuration
 *          methods: useful for utility functions
 *
 * Thuộc về lớp, không phải đối tượng
 * Thuộc tính: hữu ích cho bộ đệm,  cấu hình cố định
 * Phương pháp: hữu ích cho các chức năng tiện ích
 */

class Car {
    static numberOfCars = 0;
    constructor(model) {
        this.model = model;

        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log("3...2...1...GO!")
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ferrari");
const car5 = new Car("Lambo");


console.log(Car.numberOfCars);

Car.startRace();