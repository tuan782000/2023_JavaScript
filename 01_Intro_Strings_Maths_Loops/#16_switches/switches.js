/**
 * switch = statement that examines a value
 *          for a match against many case clauses
 *          More efficient that many "else if" statements
*/

let gradle = "A";

//cách 1:
// if(gradle == "A"){
//     console.log("A")
// }else if(gradle == B){
//     console.log("B")
// }else if(gradle == "C"){
//     console.log("C")
// }else if(gradle == "D"){
//     console.log("D")
// }else if(gradle == "E"){
//     console.log("E")
// }else if(gradle == "F"){
//     console.log("F")
// }else {
//     console.log(gradle, "is not a letter grade")
// }

// cách 2:

switch (true) {
    case "A":
        console.log("A")
        break;
    case "B":
        console.log("B")
        break;
    case "C":
        console.log("C")
        break;
    case "D":
        console.log("D")
        break;
    case "E":
        console.log("E")
    break;
    case "F":
        console.log("F")
        break;
    default:
        console.log(gradle," is not a letter grade")
        break;
}


let diem = "95"

switch (true) {
    case diem >= 90:
        console.log("Perfect")
        break;
    case diem >= 80:
        console.log("Good")
        break;
    case diem >= 70:
        console.log("You did OK")
        break;    
    case diem >= 60:
        console.log("You passed")
    break;
    case diem < 60:
        console.log("You failed")
        break;   
    default:
        console.log(gradle," is not a letter grade")
        break;
}


