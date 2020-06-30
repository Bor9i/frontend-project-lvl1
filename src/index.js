import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

export const name = () => {
  console.log('Welcome to the Brain Games!');
  const nameQuestion = readlineSync.question('May I have your name? ');
  const strHello = `Hello, ${nameQuestion}!`;
  console.log(strHello);
  return nameQuestion;
};
// Игровой движок.
export const gameEngine = (anyName, anyGame) => {
  const strEndGame = `Congratulations, ${anyName}!`;
  const strRight = 'Correct!';
  for (let i = 0; i < 3; i += 1) {
    console.log(String(anyGame[i][0]));
    console.log(String(anyGame[i][1]));
    const inputText = readlineSync.question('Your answer: ');
    const strWrong = `'${inputText}' is wrong answer ;(. Correct answer was '${String(anyGame[i][2])}'. Let's try again, ${anyName}!`;
    if (String(anyGame[i][2]) === inputText) {
      console.log(strRight);
    } else {
      return strWrong;
    }
  }
  return strEndGame;
};
