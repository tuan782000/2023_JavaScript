class Car{
    constructor(model, year, color) {
        this.model = model
        this.year = year
        this.color = color
    }
}

// khai báo cơ bản constructor cho lớp car

const car1 = new Car ("Mustang", 2023, "red");
const car2 = new Car ("Corvette", 2024, "blue");
const car3 = new Car ("Lambo", 2022, "yellow");

// khởi tạo giá trị cho car1 car2 car3 bằng cách new Car (truyền các giá trị)

displayInfo(car1)
changeColor(car3,"gold")
displayInfo(car3)


function displayInfo(car){ //Viết hàm, chức năng để thực hiện in ra thông tin ở console
    console.log(car.model)
    console.log(car.year)
    console.log(car.color)
}

function changeColor (car, color) { // hàm đổi màu
    car.color = color;
}