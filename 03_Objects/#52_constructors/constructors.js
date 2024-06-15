// constructor = a specail method of a class, accepts arguments and assigns properties
// người xây dựng =  một phương thức cụ thể của một lớp, chấp nhận các đối số và gán các thuộc tính


class Student {

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`)
    }
}

const student1 = new Student("Tuan", 23, 4.0);
const student2 = new Student("Mi", 23, 3.0);

console.log(student1.name)
console.log(student1.age)
console.log(student1.gpa)

student1.study();

console.log(student2.name)
console.log(student2.age)
console.log(student2.gpa)

student2.study();