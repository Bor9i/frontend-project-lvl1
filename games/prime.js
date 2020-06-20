import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';
import { answer, strBuilder, strEndGame } from '../src/index.js';

let endgame = 1;
for (let i = 0; i < 3; i += 1) {
  const num = Math.ceil(Math.random() * 30);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(num);
  answer[0] = 'yes';
  for (let j = 2; j < num; j += 1) {
    if (num === 1) {
      answer[0] = 'no';
      break;
    }
    if (num % j === 0) {
      answer[0] = 'no';
      break;
    }
  }
  const inputText = readlineSync.question('Your answer: ');
  console.log(strBuilder(inputText));
  if (answer[0] !== inputText) {
    endgame = 0;
    break;
  }
}
if (endgame === 1) {
  console.log(strEndGame);
}
