const fs = require('fs')
 fs.writeFile('./welcome.txt','Hello Node',(err,data)=>{
    console.log('created with succ')
 })
 fs.readFile('./hello.txt','utf-8',(err,data)=>{
    console.log(data)
 })
 console.log('After Reading');