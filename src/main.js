var fs = require("file-system");

fs.recurse('/app/docker-parts', function (filepath, relative, filename) {
    if (filename) {
        console.log(`file ${filepath}`);
        let config = require(filepath);
        console.log(`required: ${config}`);
    } else {
        console.log(`dir ${filepath}`);
    }
});