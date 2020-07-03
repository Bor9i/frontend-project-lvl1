import { random, gameEngine } from '../src/index.js';

const calcGame = () => {
  const strQuestion = 'What is the result of the expression?';
  const gameData = [];
  const gameCounter = 3;
  const operations = ['*', '+', '-'];
  for (let i = 0; i < gameCounter; i += 1) {
    let result = 0;
    const symbolChanger = random(operations.length) - 1;
    const a = random(10);
    const b = random(10);
    gameData.push([]);
    gameData[i].push(strQuestion);
    if (symbolChanger === 0) {
      result = a * b;
      gameData[i].push(`${a} ${operations[0]} ${b}`);
    } else if (symbolChanger === 1) {
      result = a + b;
      gameData[i].push(`${a} ${operations[1]} ${b}`);
    } else if (symbolChanger === 2) {
      result = a - b;
      gameData[i].push(`${a} ${operations[2]} ${b}`);
    }
    gameData[i].push(result);
  }
  return gameEngine(gameData);
};

export default calcGame;
