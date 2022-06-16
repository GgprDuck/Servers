const http = require('http');
const host = 'localhost';
const port = 8000;

const postData = JSON.stringify({
    'msg': 'Hello World!'
});

const options = {
    hostname: 'localhost',
    port: 8000,
    path: '/buy',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.write(postData);