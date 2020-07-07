import { gameEngine, gameCount } from '../index.js';
import random from '../random.js';

const primeNumber = (number) => {
  let answer = true;
  for (let j = 2; j < number; j += 1) {
    if (number === 1) {
      answer = false;
      break;
    }
    if (number % j === 0) {
      answer = false;
      break;
    }
  }
  return answer;
};

const primeGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const task = [];
  const decision = [];
  for (let i = 0; i < gameCount; i += 1) {
    const num = random(1, 30);
    const result = primeNumber(num) === true ? 'yes' : 'no';
    task.push(num);
    decision.push(result);
  }
  return gameEngine(question, task, decision);
};

export default primeGame;
