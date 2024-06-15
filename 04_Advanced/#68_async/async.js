//async: không đồng bộ = make a function return a Promise || làm một hàm trả về một lời hứa

// Đây là cách viết Promise
// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = true;

//     if (fileLoaded) {
//         resolve("FILE LOADED");
//     } else {
//         reject("FILE NOT loaded");
//     }
// });

// promise
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error));

// Đây là cách viết Async

async function loadFile() {
    let fileLoaded = false;

    if(fileLoaded){
        return "File loaded";
    }else{
        throw "File NOT loaded"
    }

}

loadFile().then(value => console.log(value))
          .catch(error => console.log(error))
