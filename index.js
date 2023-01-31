'use strict';

const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);

const textOut = `This is our available information on Avocados. ${textIn}. Created on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
