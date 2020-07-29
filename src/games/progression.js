import { gameEngine, numberOfGames } from '../index.js';
import random from '../random.js';

const runProgressionGame = () => {
  const task = 'What number is missing in the progression?';
  const gameData = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const progressionLength = 10;
    const index = random(0, progressionLength - 1);
    const step = random(3, 7);
    const progression = [];
    const firstElement = random(1, 10);
    for (let j = 0; j < progressionLength - 1; j += 1) {
      if (progression.length === 0) {
        progression.push(firstElement);
      }
      progression.push(progression[j - 1] + step);
    }
    const answer = progression[index];
    progression[index] = '..';
    const question = progression.join(' ');
    gameData.push([question, answer.toString()]);
  }
  return gameEngine(task, gameData);
};

export default runProgressionGame;
