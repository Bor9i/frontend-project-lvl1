import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

export const random = (num) => {
  const number = Math.ceil(Math.random() * num);
  return number;
};

// Игровой движок.
export const gameEngine = (anyGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const strHello = `Hello, ${name}!`;
  console.log(strHello);
  const strEndGame = `Congratulations, ${name}!`;
  const strRight = 'Correct!';
  for (let i = 0; i < 3; i += 1) {
    console.log(String(anyGame[i][0]));
    console.log(String(anyGame[i][1]));
    const inputText = readlineSync.question('Your answer: ');
    const strWrong = `'${inputText}' is wrong answer ;(. Correct answer was '${String(anyGame[i][2])}'. Let's try again, ${name}!`;
    if (String(anyGame[i][2]) === inputText) {
      console.log(strRight);
    } else {
      console.log(strWrong);
      return strWrong;
    }
  }
  console.log(strEndGame);
  return strEndGame;
};
