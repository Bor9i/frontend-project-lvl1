const primeGame = () => {
  const strQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arr = [[[], [], []], [[], [], []], [[], [], []]];
  for (let i = 0; i < 3; i += 1) {
    arr[i][0].push(strQuestion);
    const num = Math.ceil(Math.random() * 30);
    arr[i][1].push(num);
    let answer = 'yes';
    for (let j = 2; j < num; j += 1) {
      if (num === 1) {
        answer = 'no';
        break;
      }
      if (num % j === 0) {
        answer = 'no';
        break;
      }
    }
    arr[i][2].push(answer);
  }
  return arr;
};

export default primeGame;
