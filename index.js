const unrekter_scan = require('unrekter-scan');
const unrekt_my_bags = require('unrekt-my-bags');
const dotenv = require('dotenv');
const firebase = require('firebase');
const cors = require('cors');
const babel_core = require('babel-core');
const multer = require('multer');
const mongoose = require('mongoose');
const jest = require('jest');
const eth_crypto = require('eth-crypto');
const bcrypt = require('bcrypt');
const passport = require('passport');
const request = require('request');
const enzyme = require('enzyme');
const moment = require('moment');
const async = require('async');
const underscore = require('underscore');
const jquery = require('jquery');

const buffer = Buffer.from('Hello Buffer');
console.log(buffer.toString());

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');

const assert = require('assert');
assert.strictEqual(1, 1, '1 is strictly equal to 1');

const net = require('net');
const client = net.connect({ port: 8124 }, () => {
  console.log('Connected to server!');
  client.write('Hello, server! Love, Client.');
});

const fs = require('fs');
fs.mkdir('new-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory created successfully');
});

const args = process.argv.slice(2);
console.log(`Arguments: ${args.join(', ')}`);

const http2 = require('http2');
const server = http2.createServer();
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>');
});
server.listen(3000);

const fs = require('fs');
fs.writeFileSync('message.txt', 'Hello Node.js', 'utf8');
console.log('File written successfully');

const { exec } = require('child_process');
exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
};
console.log(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4));

const calculateArea = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};
console.log('Area of a circle with radius 5:', calculateArea(5));