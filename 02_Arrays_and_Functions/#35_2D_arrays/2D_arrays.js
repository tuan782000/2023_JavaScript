//2D array = An array of arrays
// mảng thứ 1
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrot", "onion", "potatoes"]
let meats = ["eggs","chicken", "fish"];


// mảng thứ 1 chứa trong mảng thứ 2
let groceryList = [fruits, vegetables, meats];



for(let list of groceryList){ // nó sẽ lặp qua mãng groceryList 3 lần và đưa 3 mãng con tương ứng  fruits, vegetables, meats
    console.log(list)
    for(let food of list) { /// nó sẽ lặp qua mãng list và lấy ra toàn bộ phần có trong mỗi mãng
        console.log(food)
    }
}


groceryList[0][0] = "mangoes" // tìm vị trí có phần tử 0 trong mãng groceryList và tìm vị trí phần tử 0 thuộc mãng fuits
// sau đó đổi apples thành mangoes
