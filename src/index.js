import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

export const gameCount = 3;

export const gameEngine = (anyQuestion, anyTaskDecision) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < gameCount; i += 1) {
    console.log(anyQuestion);
    console.log(anyTaskDecision[i][0]);
    const inputText = readlineSync.question('Your answer: ');
    if (anyTaskDecision[i][1] === inputText) {
      console.log('Correct!');
    } else {
      console.log(`"${inputText}" is wrong answer ;(. Correct answer was "${anyTaskDecision[i][1]}".\nLet's try again, ${name}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};
