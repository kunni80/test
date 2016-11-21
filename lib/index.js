const fsp = require('fs-promise');
const path = require('path');
const easyimg = require('easyimage');
var _path = path.join(__dirname, "../tmp/hello1.txt");

async function writeInFile() {
    await fsp.writeFile(_path, 'hello world Twice ||');
}
var imagesPath = path.join(__dirname, "../Images/");



async function readFiles() {
    try {
        function gcd(a, b) {
            return (b == 0) ? a : gcd(b, a % b);
        }

        var files = await fsp.readdir(imagesPath);
        for (let file of files) {
            var source = path.join(imagesPath, file);
            var result = await easyimg.info(source);
            console.log(result.width + " X " + result.height);
            console.log(gcd(result.width, result.height));
            var response = await easyimg.thumbnail({
                src: source, dst: './output/' + file,
                width: 1080, height: 1080
            });
            console.log(response);
        }
    } catch (err) {
        console.log(err);
    }
}

async function readFromFile() {
    var contents = await fsp.readFile(_path, { encoding: 'utf8' });
    return contents;
}

async function run() {
    try {
        await writeInFile();
        await readFiles();
        //   var result = await readFromFile();
        //   console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

run().catch((err) => {
    // make sure to handle the error!
    console.log("Problem starting app");
});