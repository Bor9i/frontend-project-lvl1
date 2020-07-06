import { random, gameEngine, gameCount } from '../index.js';

const primeNumber = (number) => {
  let answer = 'yes';
  for (let j = 2; j < number; j += 1) {
    if (number === 1) {
      answer = 'no';
      break;
    }
    if (number % j === 0) {
      answer = 'no';
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
    const num = random(30);
    task.push(num);
    decision.push(primeNumber(num));
  }
  return gameEngine(question, task, decision);
};

export default primeGame;
