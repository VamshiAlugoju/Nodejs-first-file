console.log("hello world")
console.log("hello world")
 
const { fstat } = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
   // console.log("server running");
   console.log(req)
})

server.listen(4000)


