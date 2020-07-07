import { gameEngine, gameCount } from '../index.js';
import random from '../random.js';

const evenGame = () => {
  const question = 'Is this an even number? Answer "yes" or "no".';
  const task = [];
  const decision = [];
  for (let i = 0; i < gameCount; i += 1) {
    const number = random(1, 100);
    const num = number % 2;
    task.push(number);
    if (num === 0) {
      decision.push('yes');
    } else {
      decision.push('no');
    }
  }
  return gameEngine(question, task, decision);
};

export default evenGame;
