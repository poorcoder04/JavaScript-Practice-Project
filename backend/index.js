const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

fs.writeFileSync("./file-01.js",'This is a temporary file');

fs.appendFileSync("./file-01.js", '\nthis is the second line');