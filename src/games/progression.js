import { random, gameEngine, gameCount } from '../index.js';

const progressionGame = () => {
  const question = 'What number is missing in the progression?';
  const task = [];
  const decision = [];
  for (let i = 0; i < gameCount; i += 1) {
    const rowLength = 10;
    const index = random(rowLength) - 1;
    const step = random(7);
    const row = [step + 2];
    for (let j = 0; j < rowLength - 1; j += 1) {
      row.push(row[j] + step);
    }
    const temp = row[index];
    row[index] = '..';
    task.push(row.join(' '));
    decision.push(`${temp}`);
  }
  return gameEngine(question, task, decision);
};

export default progressionGame;
