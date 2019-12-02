const fs = require('fs');

const calcFuel = mass => {
  if (Math.floor(mass / 3) - 2 <= 0) {
    return 0;
  }
  return Math.floor(mass / 3) - 2 + calcFuel(Math.floor(mass / 3) - 2);
};

try {
  const data = fs.readFileSync('./puzzle-input.txt').toString();
  const inputNums = data.split('\n');
  inputNums.pop();

  const fuelRequirements = inputNums.map(moduleMass => calcFuel(moduleMass));
  const fuelRequirement = fuelRequirements.reduce((acc, curr) => acc + curr);
  console.log(fuelRequirement);
} catch (error) {
  console.error(error);
}
