// await chờ đợi = makes an async function wait for a Promise || làm cho một chức năng không đồng bộ chờ một Lời hứa
async function loadFile() {
    let fileLoaded = false;

    if (fileLoaded) {
        return "File loaded";
    } else {
        throw "File NOT loaded";
    }
}

async function startProcess() {
    try {
        let message = await loadFile();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

startProcess();
