#!/usr/bin/env node
import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

export const str0 = console.log('Welcom to the Brain Games!');
const name = readlineSync.question('Your answer: ');
const str1 = 'Hello, ';
const str2 = '!';
export const str3 = console.log(str1 + name + str2);
