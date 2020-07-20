import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

export const numberOfGames = 3;

export const gameEngine = (anyQuestion, anyGameDataList) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < numberOfGames; i += 1) {
    const [task, result] = anyGameDataList[i];
    console.log(anyQuestion);
    console.log(task);
    const inputText = readlineSync.question('Your answer: ');
    if (result === inputText) {
      console.log('Correct!');
    } else {
      console.log(`"${inputText}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${name}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};
