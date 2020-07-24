import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

export const numberOfGames = 3;

export const gameEngine = (anyTask, anyGameDataList) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let gameResult;
  for (let i = 0; i < numberOfGames; i += 1) {
    const [gameQuestion, result] = anyGameDataList[i];
    console.log(anyTask);
    console.log(gameQuestion);
    const inputText = readlineSync.question('Your answer: ');
    if (result === inputText) {
      console.log('Correct!');
    } else {
      console.log(`"${inputText}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${name}!`);
      gameResult = 'lose game';
      break;
    }
  }
  if (gameResult !== 'lose game') {
    console.log(`Congratulations, ${name}!`);
  }
};
