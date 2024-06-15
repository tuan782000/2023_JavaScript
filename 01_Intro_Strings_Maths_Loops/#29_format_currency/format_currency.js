/**
 *  toLocalString() = return a string with a language sensitive representation of this number
 * 
 * 
 * mumber .toLocaleString(locale, {options});
 * 
 * 'locale' = specify that language (undefined = default)
 * 'options' = object with formatting options
 * */ 

let myNum = 123456.789;

// số học
// myNum = myNum.toLocaleString("en-US") //US english
// myNum = myNum.toLocaleString("hi-IN") //Hindi
// myNum = myNum.toLocaleString("de-DE") //Standard German

// tiền tệ
myNum = myNum.toLocaleString("en-US", {style:"currency", currency:"USD"}) //currency: tiền tệ
// myNum = myNum.toLocaleString("hi-IN", {style:"currency", currency:"INR"})
// myNum = myNum.toLocaleString("de-DE", {style:"currency", currency:"EUR"})

// %: phần trăm
// myNum = myNum.toLocaleString(undefined, {style:"percent"});

//unit: độ
// myNum = myNum.toLocaleString(undefined, {style:"unit", unit:"celsius"});

console.log(myNum)

// kq: 123,456.789