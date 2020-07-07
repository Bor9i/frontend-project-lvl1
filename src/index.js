import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

export const gameCount = 3;

export const gameEngine = (anyQuestion, anyTask, anyDecision) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const hello = `Hello, ${name}!`;
  console.log(hello);
  const endGame = `Congratulations, ${name}!`;
  const rightAnswer = 'Correct!';
  for (let i = 0; i < gameCount; i += 1) {
    console.log(anyQuestion);
    console.log(String(anyTask[i]));
    const inputText = readlineSync.question('Your answer: ');
    const wrongAnswer = `'${inputText}' is wrong answer ;(. Correct answer was '${String(anyDecision[i])}'. Let's try again, ${name}!`;
    if (String(anyDecision[i]) === inputText) {
      console.log(rightAnswer);
    } else {
      console.log(wrongAnswer);
      return wrongAnswer;
    }
  }
  console.log(endGame);
  return endGame;
};
