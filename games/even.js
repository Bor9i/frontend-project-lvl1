import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';
import { answer, strBuilder, strEndGame } from '../src/index.js';

let endgame = 1;
for (let i = 0; i < 3; i += 1) {
  const number = Math.ceil(Math.random() * 100);
  const num = number % 2;
  console.log('Is this an even number? Answer `yes` or `no`.');
  console.log(number);
  const otvet = readlineSync.question('Your answer: ');
  if (num === 0) {
    answer[0] = 'yes';
    console.log(strBuilder(otvet));
  } else {
    answer[0] = 'no';
    console.log(strBuilder(otvet));
  }
  if (answer[0] !== otvet) {
    endgame = 0;
    break;
  }
}
if (endgame === 1) {
  console.log(strEndGame);
}
