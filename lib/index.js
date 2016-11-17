const fsp = require('fs-promise');
const path = require('path');

async function run() {
    try {
        var _path = path.join(__dirname, "../tmp/hello1.txt");

        await fsp.writeFile(_path, 'hello world');

        var contents = await fsp.readFile(_path, { encoding: 'utf8' });

        console.log(contents);
    }
    catch (err) {
        console.log(err);
    }
}

run().catch((err) => {
    // make sure to handle the error!
    console.log("Problem starting app");
});