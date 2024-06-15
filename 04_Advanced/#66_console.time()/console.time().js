/**
 * console.time() = Starts a timer you can use to track now how long an operation takes Give each timer a unique name
 */

// start
console.time("Response time"); // này chạy đầu 

// alert("CLick ok")
setTimeout(() => console.log("Hello"), 3000); // này chạy cuối cùng

// end
console.timeEnd("Response time"); // này chayj thứ 2
