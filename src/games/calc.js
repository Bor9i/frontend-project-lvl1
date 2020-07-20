import { gameEngine, numberOfGames } from '../index.js';
import random from '../random.js';

const calcGame = () => {
  const task = 'What is the result of the expression?';
  const gameDataList = [];
  const operations = ['*', '+', '-'];
  for (let i = 0; i < numberOfGames; i += 1) {
    let result;
    const operationIndex = random(0, operations.length - 1);
    const a = random(1, 10);
    const b = random(1, 10);
    switch (operations[operationIndex]) {
      case '*':
        result = a * b;
        break;
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      default:
        break;
    }
    gameDataList.push([`${a} ${operations[operationIndex]} ${b}`, result.toString()]);
  }
  return gameEngine(task, gameDataList);
};

export default calcGame;
