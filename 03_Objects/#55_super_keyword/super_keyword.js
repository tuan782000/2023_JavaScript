/**
 * Supper = Refers to the parent class: Tham chiếu đến lớp cha
 *          Commonly used to invoke constructor of a parent class: Thường được sử dụng để gọi hàm tạo của lớp cha
 */

class Animal{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed){
        super(name, age)
        this.swimSpeed = swimSpeed
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed){
        super(name, age)
        this.flySpeed = flySpeed
    }

}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 1.5, 35);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name, rabbit.age, rabbit.runSpeed)
console.log(fish.name, fish.age, fish.swimSpeed)
console.log(hawk.name, hawk.age, hawk.flySpeed)