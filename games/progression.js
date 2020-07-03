import { random, gameEngine } from '../src/index.js';

const progressionGame = () => {
  const strQuestion = 'What number is missing in the progression?';
  const gameData = [];
  const gameCounter = 3;
  for (let i = 0; i < gameCounter; i += 1) {
    gameData.push([]);
    gameData[i].push(strQuestion);
    const index = random(10) - 1;
    const step = random(7);
    const row = [step + 2];
    for (let j = 0; j < 9; j += 1) {
      row.push(row[j] + step);
    }
    const temp = row[index];
    row[index] = '..';
    gameData[i].push(row.join(' '));
    gameData[i].push(`${temp}`);
  }
  return gameEngine(gameData);
};

export default progressionGame;
