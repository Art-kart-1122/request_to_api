const fs = require('fs');
const path = require('path');

async function readBinaryFile(path) {
  const stream =  fs.createReadStream(path);
  stream.on('data', (data) => {
  })



}

(async function f() {
    //console.log(readBinaryFile(path.join(__dirname, '../data/test_file.txt')));
    new ArrayBuffer()
})();
