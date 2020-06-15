import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';
import { name } from './cli.js';

let endgame = 0;
const congratulations = 'Congratulations, ';
const symbol = '!';
const lastString = congratulations + name + symbol;
for (let i = 0; i < 3; i += 1) {
  const number = Math.round(Math.random() * 100) + 1;
  const num = number % 2;
  console.log('Is this an even number? Answer `yes` or `no`.');
  console.log(number);
  const otvet = readlineSync.question('Enter a response: ');
  if (otvet !== 'yes' && otvet !== 'no') {
    console.log('wrong answer ;(');
    break;
  }
  if (num === 0 && otvet === 'yes') {
    console.log('Correct!');
    endgame = 1;
  } else if (num === 0 && otvet === 'no') {
    console.log('`no` is wrong answer ;(. Correct answer was `yes`');
    endgame = 0;
    break;
  } else if (num !== 0 && otvet === 'no') {
    console.log('Correct!');
    endgame = 1;
  } else if (num !== 0 && otvet === 'yes') {
    console.log('`yes` is wrong answer ;(. Correct answer was `no`');
    endgame = 0;
    break;
  }
}
if (endgame === 1) {
  console.log(lastString);
}
