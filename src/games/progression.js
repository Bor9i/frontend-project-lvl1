import { gameEngine, numberOfGames } from '../index.js';
import random from '../random.js';

const progressionGame = () => {
  const task = 'What number is missing in the progression?';
  const gameDataList = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const progressionLength = 10;
    const index = random(0, progressionLength - 1);
    const step = random(3, 7);
    const firstElement = random(1, 10);
    const progression = [firstElement];
    for (let j = 0; j < progressionLength - 1; j += 1) {
      progression.push(progression[j] + step);
    }
    const hidenNum = progression[index];
    progression[index] = '..';
    gameDataList.push([progression.join(' ').toString(), hidenNum.toString()]);
  }
  return gameEngine(task, gameDataList);
};

export default progressionGame;
