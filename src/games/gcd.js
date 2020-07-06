import { random, gameEngine, gameCount } from '../index.js';

const gcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const task = [];
  const decision = [];
  for (let i = 0; i < gameCount; i += 1) {
    const a = random(50);
    const b = random(50);
    const max = a > b ? a : b;
    const min = a < b ? a : b;
    let result = 1;
    for (let j = min; j > 0; j -= 1) {
      if (max % j === 0 && min % j === 0) {
        result = j;
        break;
      }
    }
    task.push(`${a} ${b}`);
    decision.push(`${result}`);
  }
  return gameEngine(question, task, decision);
};

export default gcdGame;
