import { gameEngine, numberOfGames } from '../index.js';
import random from '../random.js';

const primeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2 || number === 3) {
    return true;
  }
  for (let j = 2; j <= number / 2; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const num = random(1, 30);
    const result = primeNumber(num) === true ? 'yes' : 'no';
    gameData.push([num.toString(), result]);
  }
  return gameEngine(question, gameData);
};

export default primeGame;
