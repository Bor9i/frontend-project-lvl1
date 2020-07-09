import { gameEngine, gameCount } from '../index.js';
import random from '../random.js';

const primeNumber = (number) => {
  let answer = 'oops!';
  if (number === 2 || number === 3) {
    answer = true;
    return answer;
  }
  if (number < 2) {
    answer = false;
    return answer;
  }
  for (let j = 2; j <= number / 2; j += 1) {
    if (number % j === 0) {
      answer = false;
      break;
    } else {
      answer = true;
    }
  }
  return answer;
};

const primeGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskDecision = [];
  for (let i = 0; i < gameCount; i += 1) {
    const num = random(1, 30);
    const result = primeNumber(num) === true ? 'yes' : 'no';
    taskDecision.push([`${num}`, `${result}`]);
  }
  return gameEngine(question, taskDecision);
};

export default primeGame;
