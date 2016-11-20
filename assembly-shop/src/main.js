let fs = require("file-system");

fs.recurse(__dirname + "/dockers", ["**/dockerfileBuilder.js"], (filepath, relative, filename) => {
    if (filename) {
        let builder = require(filepath).default;
        builder.getCommands().forEach((command) => {
            console.log(`${command.run()}`);
        });
    }
});