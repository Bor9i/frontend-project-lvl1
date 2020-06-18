import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

// Приветствие и получение имени.
export const str0 = console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
export const str1 = console.log(`Hello, ${name}!`);
// Механизм построения строки правильного/непрвильного ответа.
export const answer = ['memory for answer'];
export const strBuilder = (anyAnswer) => {
  const strWrong = `'${anyAnswer}' is wrong answer ;(. Correct answer was '${answer[0]}'. Let's try again, ${name}!`;
  const strRight = 'Correct!';
  if (anyAnswer === answer[0]) {
    return strRight;
  }
  return strWrong;
};
export const strEndGame = `Congratulations, ${name}!`;
