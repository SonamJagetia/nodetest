
const fs = require('fs');
// Synchronous Method
const files = fs.readdirSync('./');
console.log(files);

// asynchronous Method
fs.readdir('./', function(err, files){
  if (err) console.log('Error', err);
  else console.log('Result', files);
});
