const evenGame = () => {
  const strQuestion = 'Is this an even number? Answer "yes" or "no".';
  const arr = [[[], [], []], [[], [], []], [[], [], []]];
  for (let i = 0; i < 3; i += 1) {
    const number = Math.ceil(Math.random() * 100);
    const num = number % 2;
    arr[i][0].push(strQuestion);
    arr[i][1].push(number);
    if (num === 0) {
      arr[i][2].push('yes');
    } else {
      arr[i][2].push('no');
    }
  }
  return arr;
};

export default evenGame;
