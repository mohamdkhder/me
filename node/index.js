// const fs = require('node:fs')
// // const filecontent = fs.readFileSync("text", "utf-8")
// // console.log(filecontent);
// fs.readFile("text", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
const { createServer } = require('node:https');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

