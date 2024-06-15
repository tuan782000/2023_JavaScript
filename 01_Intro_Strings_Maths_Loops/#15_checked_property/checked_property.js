// cách 1
// document.getElementById("myButton").onclick = function(){
//     const myCheckBox = document.getElementById("myCheckBox")
//     if(myCheckBox.checked){
//         console.log("You are sub")
//     }else {
//         console.log("You are not sub")
//     }
// }
// cách 2
document.querySelector("#myButton").onclick = function(){
    const myCheckBox = document.querySelector("#myCheckBox")
    const visaBtn = document.querySelector("#visaBtn")
    const mastercardBtn = document.querySelector("#mastercardBtn")
    const paypalBtn = document.querySelector("#paypalBtn")


    if(myCheckBox.checked){
        console.log("You are sub")
    }else {
        console.log("You are not sub")
    }

    if (visaBtn.checked == true){
        console.log("Visa")
    }else if(mastercardBtn.checked == true){
        console.log("Mastercard")
    }else if(paypalBtn.checked == true) {
        console.log("paypal")
    }else {
        console.log("You must select a payment type!")
    }
}