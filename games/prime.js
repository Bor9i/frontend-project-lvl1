import { random, gameEngine } from '../src/index.js';

const primeNumber = (number) => {
  let answer = 'yes';
  for (let j = 2; j < number; j += 1) {
    if (number === 1) {
      answer = 'no';
      break;
    }
    if (number % j === 0) {
      answer = 'no';
      break;
    }
  }
  return answer;
};
const primeGame = () => {
  const strQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];
  const gameCounter = 3;
  for (let i = 0; i < gameCounter; i += 1) {
    gameData.push([]);
    gameData[i].push(strQuestion);
    const num = random(30);
    gameData[i].push(num);
    gameData[i].push(primeNumber(num));
  }
  return gameEngine(gameData);
};

export default primeGame;
