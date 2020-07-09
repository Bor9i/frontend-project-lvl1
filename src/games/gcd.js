import { gameEngine, gameCount } from '../index.js';
import random from '../random.js';

const gcd = (firstNumber, secondNumber) => {
  const max = firstNumber > secondNumber ? firstNumber : secondNumber;
  const min = firstNumber < secondNumber ? firstNumber : secondNumber;
  let result = 1;
  for (let j = min; j > 0; j -= 1) {
    if (max % j === 0 && min % j === 0) {
      result = j;
      break;
    }
  }
  return result;
};

const gcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const taskDecision = [];
  for (let i = 0; i < gameCount; i += 1) {
    const a = random(1, 50);
    const b = random(1, 50);
    const result = gcd(a, b);
    taskDecision.push([`${a} ${b}`, `${result}`]);
  }
  return gameEngine(question, taskDecision);
};

export default gcdGame;
