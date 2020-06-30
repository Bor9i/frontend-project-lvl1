const gcdGame = () => {
  const strQuestion = 'Find the greatest common divisor of given numbers.';
  const arr = [[[], [], []], [[], [], []], [[], [], []]];
  for (let i = 0; i < 3; i += 1) {
    arr[i][0].push(strQuestion);
    const a = Math.ceil(Math.random() * 50);
    const b = Math.ceil(Math.random() * 50);
    const max = a > b ? a : b;
    const min = a < b ? a : b;
    let result = 1;
    for (let j = min; j > 0; j -= 1) {
      if (max % j === 0 && min % j === 0) {
        result = j;
        break;
      }
    }
    arr[i][1].push(`${a} ${b}`);
    arr[i][2].push(`${result}`);
  }
  return arr;
};

export default gcdGame;
