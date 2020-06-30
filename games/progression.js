const progressionGame = () => {
  const strQuestion = 'What number is missing in the progression?';
  const arr = [[[], [], []], [[], [], []], [[], [], []]];
  for (let i = 0; i < 3; i += 1) {
    arr[i][0].push(strQuestion);
    const index = Math.floor(Math.random() * 10);
    const step = Math.ceil(Math.random() * 7);
    const row = [step + 2];
    for (let j = 0; j < 9; j += 1) {
      row.push(row[j] + step);
    }
    arr[i][2].push(`${row[index]}`);
    row[index] = '..';
    arr[i][1].push(row.join(' '));
  }
  return arr;
};

export default progressionGame;
