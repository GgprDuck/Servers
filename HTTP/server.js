const http = require('http');
const host = 'localhost';
const port = 8000;

http
    .createServer((req,res) => {
        switch (req.url){
            case '/hello':
                res.writeHead(200, {'Constent-Type': 'text/plain'})
                res.end('Hello Threre')
                break
            case '/buy':{
                res.writeHead(200, {'Constent-Type': 'text/plain'})
                res.end('Buyasd')
            }
            default:
                res.writeHead(200, {'Constent-Type': 'text/plain'})
                res.end('Goodbye');
        }
    })
    .listen(port, () => console.log("Server starts"));

    