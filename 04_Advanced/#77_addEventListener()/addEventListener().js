/**
 * .addEventListener (event, function, useCapture)
 * You can add many event handlers to one element
 * Even the same event that invokes different functions
 */

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreenLight);

// function changeRed () {
//     innerDiv.style.backgroundColor = "red"
// }

// function changeGreenLight(){
//     innerDiv.style.backgroundColor = "lightgreen"
// }

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue);

function changeBlue() {
    alert(`You selected ${this.id}`)
    this.style.backgroundColor = "lightblue"; //this ở đây là chỉ cho ngữ cảnh cả innerDiv và outerDiv
}
