/**
 * cookie = a small text file stored on your computer used to rememver in formation about the user saved in name = value pairs
 *
 * cookie = một tệp văn bản nhỏ được lưu trữ trên máy tính của bạn được sử dụng để ghi nhớ về người dùng được lưu trong cặp tên = giá trị
 */

// console.log(navigator.cookieEnabled)
// document.cookie = "firstName=Tuan; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=Tuan; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

// console.log(document.cookie)

// deleteCookie("firstName")
// deleteCookie("lastName")
// deleteCookie("email")

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookiesBtn = document.querySelector("#cookiesBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookiesBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});
function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 100);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

// setCookie("email", "tuannt@gmail.com", 365);
// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    // console.log(cDecoded)
    const cArray = cDecoded.split("; ");
    let result = null;
    console.log(cArray);
    cArray.forEach((element) => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    });
    return result;
}

// deleteCookie("firstName")
// deleteCookie("lastName")

// setCookie("firstName", "Tuan", 365);
// setCookie("lastName", "Nguyen Thai", 365);

getCookie("firstName");
