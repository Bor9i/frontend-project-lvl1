import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';
import { answer, strBuilder, strEndGame } from '../src/index.js';

let endgame = 1;
for (let i = 0; i < 3; i += 1) {
  let result = 0;
  const random = Math.ceil(Math.random() * 10);
  const a = Math.ceil(Math.random() * 10);
  const b = Math.ceil(Math.random() * 10);
  console.log('What is the result of the expression?');
  if (random < 3.4) {
    result = a * b;
    console.log(`${a} * ${b}`);
  } else if (random > 3.3 && random < 6.7) {
    result = a + b;
    console.log(`${a} + ${b}`);
  } else if (random > 6.6) {
    result = a - b;
    console.log(`${a} - ${b}`);
  }
  const inputText = readlineSync.question('Your answer: ');
  answer[0] = `${result}`;
  console.log(strBuilder(inputText));
  if (answer[0] !== inputText) {
    endgame = 0;
    break;
  }
}
if (endgame === 1) {
  console.log(strEndGame);
}
