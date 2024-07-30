const fs = require('fs');

fs.writeFile('myFile2.text', 'Hello Bappy', () => {});
fs.appendFile('myFile2.text', ' Hello Bappy now update', () => {});

fs.readFile('myFile.text', (e, data) => {
    console.log(data.toString());
});
// fs.unlinkSync('myFile2.text');
// fs.rename('myFile3.text', 'myFile5.text', () => {});
