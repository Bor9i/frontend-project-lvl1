import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';
import { answer, strBuilder, strEndGame } from '../src/index.js';

let endgame = 1;
for (let i = 0; i < 3; i += 1) {
  const index = Math.ceil(Math.random() * 10);
  const step = Math.ceil(Math.random() * 5);
  const arr = [step + 2];
  for (let j = 0; j < 9; j += 1) {
    arr.push(arr[j] + step);
  }
  answer[0] = `${arr[index]}`;
  arr[index] = '..';
  console.log('What number is missing in the progression?');
  console.log(arr.join(' '));
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
