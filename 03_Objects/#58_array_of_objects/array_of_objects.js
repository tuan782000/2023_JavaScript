class Car {
    constructor(model, year, color) {
        this.model = model
        this.year = year
        this.color = color
    }
    drive(){
        console.log(`You drive the ${this.model}`)
        // console.log(`You drive the ${this.model} and have a color ${this.color}`)
    }
}


const car1 = new Car ("Mustang", 2023, "red")
const car2 = new Car ("Corvette", 2024, "blue")
const car3 = new Car ("Lambo", 2022, "Yellow")


const cars = [car1, car2, car3];

// console.log(cars[0]);
// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

startRace();//gọi thực hiện hàm startRace

function startRace(cars){ //hàm này truyền mãng cars vào || mãng cars chứa car1 car2 và car3
    for(const car of cars){ //dùng vòng lặp for of || car and cars để gọi hàm drive trong class Car
        car.drive()
    }

}