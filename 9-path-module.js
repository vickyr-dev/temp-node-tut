const { resolve } = require('path');
const path = require('path')

const filePath = path.join('/content','textfile','text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content','textfile','text.txt')
console.log(absolute);