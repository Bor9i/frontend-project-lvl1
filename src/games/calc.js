import { gameEngine, gameCount } from '../index.js';
import random from '../random.js';

const calcGame = () => {
  const question = 'What is the result of the expression?';
  const task = [];
  const decision = [];
  const operations = ['*', '+', '-'];
  for (let i = 0; i < gameCount; i += 1) {
    let result = 0;
    const symbolChanger = random(0, operations.length - 1);
    const a = random(1, 10);
    const b = random(1, 10);
    switch (symbolChanger) {
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
    task.push(`${a} ${operations[symbolChanger]} ${b}`);
    decision.push(result);
  }
  return gameEngine(question, task, decision);
};

export default calcGame;
