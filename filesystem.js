// node filesystem.js

const fs = require('fs');
fs.writeFileSync("text.txt","Hello what is your name? am I talking to myself?")
let contentUtf = fs.readFileSync('text.txt','utf8',(err,data)=>{
    err?console.log(err):console.log(data)
})
let content = fs.readFileSync('text.txt')
console.log(contentUtf)
console.log(content)