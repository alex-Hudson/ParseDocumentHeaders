const fs = require("fs");
// var myArgs = process.argv.slice(2);
// console.log("myArgs: ", myArgs);

// let rawdata = fs.readFileSync(myArgs[0]);
// let student = JSON.parse(rawdata);
// console.log(student);

var argv = require("minimist")(process.argv.slice(2));
console.dir(argv);
