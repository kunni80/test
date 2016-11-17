const fsp = require('fs-promise');
const path = require('path');
var _path = path.join(__dirname, "../tmp/hello1.txt");

async function writeInFile() {
    await fsp.writeFile(_path, 'hello world Twice ||');
}

async function readFromFile() {
    var contents = await fsp.readFile(_path, { encoding: 'utf8' });
    return contents;
}

async function run() {
    try {
        await writeInFile();
        var result = await readFromFile();
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

run().catch((err) => {
    // make sure to handle the error!
    console.log("Problem starting app");
});