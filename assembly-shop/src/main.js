let fs = require("file-system");

fs.recurse(__dirname + "/configs", ["**/config.js"], (filepath, relative, filename) => {
    if (filename) {
        let commands = require(filepath).configCommands;
        commands.forEach((command) => {
            /** @var {Command} command */
            console.log(`${command.run()}`);
        });
    }
});