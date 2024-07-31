const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/git.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk.toString());
// });
ourReadStream.pipe(ourWriteStream);
