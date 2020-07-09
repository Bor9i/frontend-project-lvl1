import { gameEngine, gameCount } from '../index.js';
import random from '../random.js';

const calcGame = () => {
  const question = 'What is the result of the expression?';
  const taskDecision = [];
  const operations = ['*', '+', '-'];
  for (let i = 0; i < gameCount; i += 1) {
    let result = 0;
    const operationIndex = random(0, operations.length - 1);
    const a = random(1, 10);
    const b = random(1, 10);
    switch (operationIndex) {
      case 0:
        result = a * b;
        break;
      case 1:
        result = a + b;
        break;
      case 2:
        result = a - b;
        break;
      default:
        break;
    }
    taskDecision.push([`${a} ${operations[operationIndex]} ${b}`, `${result}`]);
  }
  return gameEngine(question, taskDecision);
};

export default calcGame;
