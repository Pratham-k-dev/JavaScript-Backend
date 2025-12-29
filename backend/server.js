// const { createServer } = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


export const a=10 //named export

let obj={
  x:1,
  y:2
}
export default obj;

// module.exports={ //commonJs format
//   a:10,
//   b:11
// }

