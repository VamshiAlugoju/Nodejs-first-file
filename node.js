const http = require('http');
const fs = require('fs');
const { parse } = require('path');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on("data",(chunk)=>{
       
        console.log( "chunk is " , chunk);
        body.push(chunk);
    })

    return  req.on("end",()=>{

        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        let msg = parsedBody.split("=")[1];
        fs.writeFileSync('message.txt', msg);
        res.setHeader('Location', '/');
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(`<body><h3>${msg}</h3> <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
        res.statusCode = 302;
        return res.end();
    })
  }
 
});

server.listen(3000);
