import { gameEngine, numberOfGames } from '../index.js';
import random from '../random.js';

const evenGame = () => {
  const task = 'Is this an even number? result "yes" or "no".';
  const gameData = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const issue = random(1, 100);
    const result = issue % 2 === 0 ? 'yes' : 'no';
    gameData.push([issue.toString(), result]);
  }
  return gameEngine(task, gameData);
};

export default evenGame;
