// Vòng lặp trong mãng

let prices = [5, 10, 15, 20, 25, 30];

// Lặp xuôi
for(i = 0; i < prices.length; i++){
    console.log(prices[i]);
}

// Lặp ngược
for(i = prices.length - 1; i>= 0; i--) {
    console.log(prices[i])
}

// cách dùng for up

for(let i of prices){
    console.log(i)
}

//or

for(let price of prices){
    console.log(price)
}
