let element = document.getElementById("myTitle")

element.style.backgroundColor = "lightgreen"

let fruits = document.getElementsByName("fruits");
// console.log(fruits[0])

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value)
    }
})



let vegetables = document.getElementsByTagName('li');
for (let i = 0; i < vegetables.length; i++) {
  vegetables[i].style.backgroundColor = 'lightgreen';
}
