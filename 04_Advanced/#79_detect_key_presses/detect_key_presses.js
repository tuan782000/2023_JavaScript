const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);
let y = 0;
let x = 0;

function move(event) {
    switch (event.key) {
        case "ArrowDown":
            y += 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 5;
            myDiv.style.left = x + "px";
            break;
    }
}
