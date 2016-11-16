let fs = require("file-system");

fs.recurse(__dirname + "/configs", ["**/config.js"], (filepath, relative, filename) => {
    console.log(filepath);
    if (filename) {
        console.log(filename);
        let commands = require(filepath).default;
        commands.forEach((command) => {
            console.log(`output: ${command.run()}`);
        });
    }
});