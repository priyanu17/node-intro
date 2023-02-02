'use strict';

const fs = require('fs');
const http = require('http');

/* READING AND WRITING FILES **********************************/
// reading and writing code in a synchronous manner
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is our available information on Avocados. ${textIn}. Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);

// Non blocking asynchronous code for reading and writing to files
// fs.readFile('./txt/start.txt', 'utf-8', (err1, data1) => {
//   console.log(data1);
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err2, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err3, data3) => {
//       console.log(data3);
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err4) => {
//         console.log('Your file has bee written');
//       });
//     });
//   });
// });
// console.log('After read file');

/* CREATING SERVER **********************************/

// create and start a server
const server = http.createServer((request, response) => {
  // this current callback runs each time a new request hits the server
  //   response.end('Hello from the server');
  //   console.log(request);

  console.log(request.url);

  const pathName = request.url;

  if (pathName === '/' || pathName === '/overview') {
    response.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    response.end('This is the PRODUCT');
  } else {
    response.writeHead(404, {
      'Content-type': 'text/html',
      'dummy-header': 'dummy-info',
    });
    response.end('<h1>Page Not Found!</h1>');
  }
});

// listening for incoming requests
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});
