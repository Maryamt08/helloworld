const fs = require('fs')

let data = "Hello World"

fs.writeFile('Output.txt', data, (err) => {
    if (err) throw err;
});