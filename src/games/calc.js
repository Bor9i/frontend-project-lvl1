import { random, gameEngine, gameCount } from '../index.js';

const calcGame = () => {
  const question = 'What is the result of the expression?';
  const task = [];
  const decision = [];
  const operations = ['*', '+', '-'];
  for (let i = 0; i < gameCount; i += 1) {
    let result = 0;
    const symbolChanger = random(operations.length) - 1;
    const a = random(10);
    const b = random(10);
    switch (symbolChanger) {
      case 0:
        result = a * b;
        task.push(`${a} ${operations[symbolChanger]} ${b}`);
        break;
      case 1:
        result = a + b;
        task.push(`${a} ${operations[symbolChanger]} ${b}`);
        break;
      case 2:
        result = a - b;
        task.push(`${a} ${operations[symbolChanger]} ${b}`);
        break;
      default:
        break;
    }
    decision.push(result);
  }
  return gameEngine(question, task, decision);
};

export default calcGame;
