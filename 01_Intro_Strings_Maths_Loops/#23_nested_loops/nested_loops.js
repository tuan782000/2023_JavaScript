//nested loop = a loop inside of another loop

// for (i = 1; i <= 3; i++) {
//     for (j = 1; j <= 3; j++) {
//         console.log(j);
//     }
// }

// nó sẽ lặp 123 123 123 

// ứng dụng vẽ hình chữ nhật
// vòng lặp đầu tiên vẽ row
// vòng lặp 2 vẽ col

let symbol = window.prompt("Enter a symbol to use")
let rows = window.prompt('Enter # of rows')
let cols = window.prompt('Enter # of cols')


for (i = 1; i <= rows; i++) {
    for (j = 1; j <= cols; j++) {
        document.getElementById("myRectangle").innerHTML += symbol; 
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}