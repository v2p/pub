var fs = require("file-system");

fs.recurse('/app/dockers-parts', function (filepath, relative, filename) {
    if (filename) {
        console.log(`file ${filepath}`);
        let builder = require(filepath);
        let a = builder.build();
        console.log(`required: ${a}`);
    } else {
        console.log(`dir ${filepath}`);
    }
});