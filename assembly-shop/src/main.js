import "babel-polyfill";

let fs = require("file-system");

fs.recurse(__dirname + "/dockers", ["**/dockerfileBuilder.js"], (filepath, relative, filename) => {
    if (filename) {
        let builder = require(filepath).default;
        for (let command of builder.getCommands()) {
            console.log(`${command.run()}`);
        }
    }
});