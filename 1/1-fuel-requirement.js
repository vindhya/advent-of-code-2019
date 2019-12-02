const fs = require('fs');

try {
  const data = fs.readFileSync('./puzzle-input.txt').toString();
  const inputNums = data.split('\n');
  inputNums.pop();

  let fuel = 0;
  for (let i = 0; i < inputNums.length; i++) {
    fuel = fuel + (Math.floor(inputNums[i] / 3) - 2);
  }
  console.log(fuel);
} catch (error) {
  console.error(error);
}
