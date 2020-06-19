import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';
import { answer, strBuilder, strEndGame } from '../src/index.js';

let endgame = 1;
for (let i = 0; i < 3; i += 1) {
  const a = Math.ceil(Math.random() * 50);
  const b = Math.ceil(Math.random() * 50);
  let max = a;
  let min = b;
  let result = 1;
  if (a < b) {
    max = b;
    min = a;
  }
  for (let j = min; j > 0; j -= 1) {
    if (max % j === 0 && min % j === 0) {
      result = j;
      break;
    }
  }
  answer[0] = `${result}`;
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`${a} ${b}`);
  const otvet = readlineSync.question('Your answer: ');
  console.log(strBuilder(otvet));
  if (answer[0] !== otvet) {
    endgame = 0;
    break;
  }
}
if (endgame === 1) {
  console.log(strEndGame);
}
