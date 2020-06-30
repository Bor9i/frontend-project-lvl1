const calcGame = () => {
  const strQuestion = 'What is the result of the expression?';
  const arr = [[[], [], []], [[], [], []], [[], [], []]];
  for (let i = 0; i < 3; i += 1) {
    let result = 0;
    const random = Math.ceil(Math.random() * 100);
    const a = Math.ceil(Math.random() * 10);
    const b = Math.ceil(Math.random() * 10);
    arr[i][0].push(strQuestion);
    if (random < 34) {
      result = a * b;
      arr[i][1].push(`${a} * ${b}`);
    } else if (random > 33 && random < 67) {
      result = a + b;
      arr[i][1].push(`${a} + ${b}`);
    } else if (random > 66) {
      result = a - b;
      arr[i][1].push(`${a} - ${b}`);
    }
    arr[i][2].push(result);
  }
  return arr;
};

export default calcGame;
