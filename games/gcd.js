import { random, gameEngine } from '../src/index.js';

const gcdGame = () => {
  const strQuestion = 'Find the greatest common divisor of given numbers.';
  const gameData = [];
  const gameCounter = 3;
  for (let i = 0; i < gameCounter; i += 1) {
    gameData.push([]);
    gameData[i].push(strQuestion);
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
    gameData[i].push(`${a} ${b}`);
    gameData[i].push(`${result}`);
  }
  return gameEngine(gameData);
};

export default gcdGame;
