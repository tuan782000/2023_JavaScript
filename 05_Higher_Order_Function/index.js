const studentList = [
    {
        "name": "Nguyễn Văn A",
        "stdId": "SV001",
        "dob": 2000,
        "gender": "Nam",
        "midterm": 85,
        "final": 90
    },
    {
        "name": "Trần Thị B",
        "stdId": "SV002",
        "dob": 2001,
        "gender": "Nữ",
        "midterm": 78,
        "final": 85
    },
    {
        "name": "Lê Văn C",
        "stdId": "SV003",
        "dob": 1999,
        "gender": "Nam",
        "midterm": 92,
        "final": 88
    },
    {
        "name": "Phạm Thị D",
        "stdId": "SV004",
        "dob": 2002,
        "gender": "Nữ",
        "midterm": 80,
        "final": 87
    },
    {
        "name": "Trần Văn E",
        "stdId": "SV005",
        "dob": 1998,
        "gender": "Nam",
        "midterm": 88,
        "final": 92
    },
    {
        "name": "Lê Thị F",
        "stdId": "SV006",
        "dob": 2003,
        "gender": "Nữ",
        "midterm": 75,
        "final": 80
    },
    {
        "name": "Hoàng Văn G",
        "stdId": "SV007",
        "dob": 2000,
        "gender": "Nam",
        "midterm": 91,
        "final": 89
    },
    {
        "name": "Mai Thị H",
        "stdId": "SV008",
        "dob": 1997,
        "gender": "Nữ",
        "midterm": 82,
        "final": 86
    },
    {
        "name": "Nguyễn Văn I",
        "stdId": "SV009",
        "dob": 2001,
        "gender": "Nam",
        "midterm": 87,
        "final": 91
    },
    {
        "name": "Trần Thị K",
        "stdId": "SV010",
        "dob": 1999,
        "gender": "Nữ",
        "midterm": 79,
        "final": 84
    }
]

const contact = {
    firstname: "John",
    lastname: "wick",
    email: "john@gmail.com",
    phone: "123-456-7890"
}

const scores = [56, 23, 78, 45, 89, 12, 67, 34, 91, 18, 76, 43, 60, 27, 84, 51, 98, 14, 69, 37]
const squareArr = [4, 9, 16, 25, 64, 49, 36, 81, 100]


const text = "Hello world!"

// 1. Loop - For: chỉ làm với mảng

// for (i = 0; i < studentList.length; i++) {
//     console.log(studentList[i])
// }

// for (i = 0; i < score.length; i++) {
//     console.log(score[i])
// }

// 2. For...in: Làm việc được với mảng và đối tượng

// Lặp qua mảng
// for (let key in studentList) {
//     console.log(studentList[key]);
// }

// Lặp qua object

// for (key in contact) {
//     console.log(`${key}: ${contact[key]}`)
// }

// 3. For...of
// for (let val of scores) {
//     console.log(val)
// }

// for (let val of studentList) {
//     console.log(val)
// }

// Lặp qua xong lấy nội dung (object) của Array chứ không lấy index. Còn for ... in lặp qua nó lấy index chứ không lấy nội dung(object)

// for (let val of text) {
//     console.log(val); // chuyên tập trung lấy ra cái value.
// }


// Tóm tắt:

/*
For: loop qua 1 array

For...in: Array và object

For...of: Array và chuỗi
*/


// 4. ForEach: Chỉ làm việc với mảng

// studentList.forEach((student, index) => {
//     console.log(index, student)
// })


// 5. Filter: lấy 1 mảng trả về 1 mảng. Dựa trên 1 cái thuộc tính nào đó mà nó kiểm tra hoặc so sánh bên dưới.

// Ví dụ có mảng score ở trên tạo ra danh sách là mảng chứa các số lớn hơn hoặc bằng 60

// Cách làm với for
// const passedScores = []
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] >= 60) {
//         passedScores.push(scores[i])
//     }
// }

// console.log(passedScores)

// Cách làm với filter:
// const passedScores = scores.filter((score) => {
//     if (score >= 50) {
//         return true;
//     }
// })

// Viết ngắn hơn
// const passedScores = scores.filter(score => score >= 50)
// console.log(passedScores)

// const femaleStudent = studentList.filter((student) => {
//     if (student.gender === 'Nữ') {
//         return true
//     }
// })

// const femaleStudent = studentList.filter(student => student.gender === "Nữ")
// console.log(femaleStudent)


// Tìm ra các sinh viên có điểm lớn hơn hoặc bằng 90

// const averageScore = studentList.filter((student) => {
//     if (((student.midterm + student.final) / 2) >= 90) {
//         return true
//     }
// })

// const averageScore = studentList.filter((student) => ((student.midterm + student.final) / 2) >= 90)

// console.log(averageScore)


// Lưu ý: điều kiện trả về true hoặc false, true là thỏa mãn với điều kiện đặt được đem vào mảng được trả về gán cho biến false thì sẽ bị loại đi.

// 6. map
// Hàm map tương tự như là forEach loop qua cái mảng và trả về 1 cái mảng mới. Khác forEach, thằng map sẽ không thay đổi mảng gốc của mình

// const studentNames = studentList.map((student) => {
//     return student.name
// })

// console.log(studentNames);

// const averageScore = studentList.map((student) => {
//     return `${student.name}: ${((student.midterm + student.final) / 2)}`
// })

// const averageScore = studentList.map(student => `${student.name}: ${(student.midterm + student.final) / 2}`)

// console.log(averageScore)


// const scoreSquare = squareArr.map(score => `${Math.sqrt(score)}`)
// console.log(scoreSquare)

// map lồng map
// const doubleSquare = squareArr.map(score => `${Math.sqrt(score)}`).map(score => score * 2)
// console.log(doubleSquare)


// 7. sort:

// Sắp xếp năm sinh theo thứ tự tăng dần

// const sortBirthDay = studentList.sort((st1, st2) => {
//     if (st1.dob > st2.dob) {
//         return 1
//     } else {
//         return -1
//     }
// })

// const sortBirthDay = studentList.sort((st1, st2) => (st1.dob > st2.dob) ? 1 : -1)

// console.log(sortBirthDay)

// Tăng dần
// const sortAscendingScore = scores.sort((num1, num2) => num1 > num2 ? 1 : -1)
// console.log(sortAscendingScore)

// Giảm dần
// const sortDescendingScore = scores.sort((num1, num2) => num1 < num2 ? 1 : -1)
// console.log(sortDescendingScore)


// 8.reduce: Gộp các phần tử trong mảng thành 1 giá trị duy nhất
// total, currentValue: required
// currentIndex, arr, inittialValue: optional


// Array.reduce(function (total, currentValue, currentIndex, arr), inittialValue) {

// }

// Cách cộng dồn với Sum
// let scoreSum = 0;
// for (let i = 0; i < scores.length; i++) {
//     scoreSum += scores[i];
// }

// console.log(scoreSum)

// const totalScores = scores.reduce((total, score) => {
//     return total + score
// }, 0)

// const totalScores = scores.reduce((total, score) => total + score, 0)

// console.log(totalScores)

// const totalFinalScore = studentList.reduce((total, student) => total + student.final, 0)
// console.log(totalFinalScore)

// 9.some: kiểm tra xem có ít nhất 1 phần tử nào trong mảng thỏa mãn với điều kiện hay không. return trả về là true hoặc false

// const hasExcellentStud = studentList.some((student) => {
//     if (student.final >= 90) {
//         return true
//     }
// })

// console.log(hasExcellentStud)


// const hasYounStudent = studentList.some((student) => {
//     if (student.dob > 2000) {
//         return true
//     }
// })

// console.log(hasExcellentStud)

// 10. every: nó giống hàm some nhưng mà every kiểm tra hết tất cả phần tử trong mảng có thỏa mãn 1 điều nào đó hay không?

// const hasAllPass = studentList.every((student) => {
//     return student.final >= 50
// })

// console.log(hasAllPass)


// 11. includes: Hàm này giúp kiểm tra trong mảng này có 1 giá trị cụ thể nào đó không? Nếu "có" trả về true ngược lại "không" thì trả về false.

// const hasTopScore = scores.includes(100)

// console.log(hasTopScore)

// Hàm inludes này thường xuyên dùng








// Học cách kết hợp các Hàm ở trên lại với nhau

// Đề: Dựa vào mảng socres tạo ra mảng mới mảng đó sẽ lấy phần tử nhân 2 lên, đồng thời kiểm tra trong mảng đó có phần tử nào lớn hơn 100 và lấy phần tử đó. Sắp xếp theo thứ tự tăng dần. Cuối cùng cộng dồn lại.

const combineArr = scores
    .map(score => score * 2)
    .filter(score => score > 100)
    .sort((num1, num2) => num1 > num2 ? 1 : -1)
    .reduce((tottal, score) => tottal += score, 0);

console.log(combineArr)


