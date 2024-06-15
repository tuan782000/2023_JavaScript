/**
 * inheritance: kế thừa = a child class can inherit all the methods and properties from another class
 *                        một class con có thể kế thừa tất cả mọi thứ như phương thức và thuộc tính từ class khác.
 */

// class Rabbit {
//     alive = true; //thuộc tính
//     name = "Rabbit" //thuộc tính

//     eat(){
//         console.log(`This ${this.name} is eating`)
//     } //method
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     } //method
//     run(){
//         console.log(`This ${this.name} is running`)
//     }

// }

// class Fish {
//     alive = true; //thuộc tính
//     name = "Fish" //thuộc tính

//     eat(){
//         console.log(`This ${this.name} is eating`)
//     } //method
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     } //method
//     swim(){
//         console.log(`This ${this.name} is swimming`)
//     }

// }
// class Hawk {
//     alive = true; //thuộc tính
//     name = "Hawk" //thuộc tính

//     eat(){
//         console.log(`This ${this.name} is eating`)
//     } //method
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     } //method
//     fly(){
//         console.log(`This ${this.name} is Planning`)
//     }

// }

// Vấn đề gặp phải là lặp code quá nhiều

// Hướng giải quyết, tạo ra 1 cái super class

class Animal {
    alive = true; //thuộc tính
    eat() {
        console.log(`This ${this.name} is eating`);
    } //method
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    } //method
}

class Rabbit extends Animal {
    name = "Rabbit"; //thuộc tính

    run() {
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal {
    name = "Fish"; //thuộc tính

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal {
    name = "Hawk"; //thuộc tính

    fly() {
        console.log(`This ${this.name} is Planning`);
    }
}


const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();