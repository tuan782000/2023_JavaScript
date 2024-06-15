Scopes và closures là hai khái niệm quan trọng trong JavaScript, chúng đóng vai trò quyết định trong quá trình thực thi mã nguồn. Scope (phạm vi) xác định sự truy cập và tồn tại của biến trong mã nguồn, trong khi closures (đóng) cho phép biến tồn tại và được sử dụng bên ngoài phạm vi chúng được tạo ra.

Trong JavaScript có 3 scope phổ biến

1. Block scope
2. Function (local) scope
3. Global scope
4. Lexical scope (này ít)

## Block scope

Định nghĩa biến bên trong ({...}), các biến bên trong {} sẽ không được truy cập bởi các
thành phần bên ngoài cái block

## Function scope

tương tự block scope các biến được khai báo bên trong 1 function thì các thành phần bên ngoài cũng không thể truy cập được

## Global scope

Khác với 2 ông trên global scope khai báo và có thể dùng bất cứ đâu

## Lexical scope

ví dụ khai báo biến trong các callbacks lồng nhau.

## Closures

Một cloure cách thức truy cập vào parent scope, mặc dù sau khi hàm cha đó đã đóng chạy.

Một clousre được tạo khi chúng ta định nghĩa 1 hàm không phải lúc hàm đó thực thi