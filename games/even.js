import { random, gameEngine } from '../src/index.js';

const evenGame = () => {
  const strQuestion = 'Is this an even number? Answer "yes" or "no".';
  const gameData = [];
  const gameCounter = 3;
  for (let i = 0; i < gameCounter; i += 1) {
    const number = random(100);
    const num = number % 2;
    gameData.push([]);
    gameData[i].push(strQuestion);
    gameData[i].push(number);
    if (num === 0) {
      gameData[i].push('yes');
    } else {
      gameData[i].push('no');
    }
  }
  return gameEngine(gameData);
};

export default evenGame;
