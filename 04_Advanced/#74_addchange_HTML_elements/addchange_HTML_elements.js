// add/change HTML elements

// const nameTag = document.createElement("h1") //Tạo ra thẻ h1 và lưu nó vào biến nameTag
// // nameTag.innerHTML = "Tuan" //này là gán giá trị cho nameTag || gán cứng
// nameTag.innerHTML = window.prompt("Enter your name") //này là gán giá trị cho nameTag || cho người dùng nhập

// document.body.append(nameTag) // chỉ đị đến body append: Nối thêm nameTag được xuất hiện trong body

var myList = document.querySelector("#fruits") // gán cho myList có giá trị trỏ đến thẻ ul có id fruits
var listItem = document.createElement("li") // gán cho listItem có thể tạo ra thẻ li
listItem.textContent = "mango"; // viết câu lệnh để thẻ li chứa nội dung mango
// myList.append(listItem) // đưa thẻ li vào thẻ ul || append: thêm vào cuối
// myList.prepend(listItem) // này tương tụ nhưng thêm lên đầu
// //  Lưu ý chỉ thêm được 1 lần bằng append hoặc prepend nếu như trùng nhau thì thằng nào viết sau thằng đó sẽ ưu tiên hơn


//  Ngoài ra còn có thể kiểm soát vị trí thêm vào
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2])
// thêm thẻ li vào danh sách ul có id fruits và thẻ li này đứng ở vị trí thứ 2 trong mãng 0, 1 ,2,....