#!/usr/bin/env node
import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('Your answer: ');
  console.log('Hello, ' + name + '!');
export default name;
