import { gameEngine, gameCount } from '../index.js';
import random from '../random.js';

const progressionGame = () => {
  const question = 'What number is missing in the progression?';
  const taskDecision = [];
  for (let i = 0; i < gameCount; i += 1) {
    const rowLength = 10;
    const index = random(0, rowLength - 1);
    const step = random(3, 7);
    const row = [step + 2];
    for (let j = 0; j < rowLength - 1; j += 1) {
      row.push(row[j] + step);
    }
    const temp = row[index];
    row[index] = '..';
    taskDecision.push([`${row.join(' ')}`, `${temp}`]);
  }
  return gameEngine(question, taskDecision);
};

export default progressionGame;
