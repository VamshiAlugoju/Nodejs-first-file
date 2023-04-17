console.log("hello world")
console.log("hello world")
 
const { fstat } = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
    
    const url = req.url;
    
    switch (url) {
        case "/home":
            res.write("welcome to home")
            break;
        case "/node":
            res.write("welcome to my nodejs project")
            break;
        case "/about":
            res.write("welcome to about us page")
            break;
    
        default:
            res.write("enter a valid url")
            break;
    }
    res.end();
})

server.listen(4000)


