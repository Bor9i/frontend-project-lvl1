import { gameEngine, gameCount } from '../index.js';
import random from '../random.js';

const evenGame = () => {
  const question = 'Is this an even number? Answer "yes" or "no".';
  const taskDecision = [];
  for (let i = 0; i < gameCount; i += 1) {
    const number = random(1, 100);
    const parityCheck = number % 2 === 0 ? 'yes' : 'no';
    taskDecision.push([`${number}`, `${parityCheck}`]);
  }
  return gameEngine(question, taskDecision);
};

export default evenGame;
