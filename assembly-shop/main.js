let fs = require("file-system");

fs.recurse("/app/dockers-parts/configs", ["**/builder.js"], (filepath, relative, filename) => {
    if (filename) {
        let builder = require(filename);
        let dockerfile = builder.create();

        console.log(`output: ${dockerfile}`);
    }
});