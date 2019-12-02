const program = (input1, input2) => {
  const intcode = [
    1,
    0,
    0,
    3,
    1,
    1,
    2,
    3,
    1,
    3,
    4,
    3,
    1,
    5,
    0,
    3,
    2,
    1,
    10,
    19,
    1,
    6,
    19,
    23,
    1,
    13,
    23,
    27,
    1,
    6,
    27,
    31,
    1,
    31,
    10,
    35,
    1,
    35,
    6,
    39,
    1,
    39,
    13,
    43,
    2,
    10,
    43,
    47,
    1,
    47,
    6,
    51,
    2,
    6,
    51,
    55,
    1,
    5,
    55,
    59,
    2,
    13,
    59,
    63,
    2,
    63,
    9,
    67,
    1,
    5,
    67,
    71,
    2,
    13,
    71,
    75,
    1,
    75,
    5,
    79,
    1,
    10,
    79,
    83,
    2,
    6,
    83,
    87,
    2,
    13,
    87,
    91,
    1,
    9,
    91,
    95,
    1,
    9,
    95,
    99,
    2,
    99,
    9,
    103,
    1,
    5,
    103,
    107,
    2,
    9,
    107,
    111,
    1,
    5,
    111,
    115,
    1,
    115,
    2,
    119,
    1,
    9,
    119,
    0,
    99,
    2,
    0,
    14,
    0
  ];
  intcode[1] = input1;
  intcode[2] = input2;

  let i = 0;
  while (intcode[i] !== 99) {
    if (intcode[i] === 1) {
      intcode[intcode[i + 3]] =
        intcode[intcode[i + 1]] + intcode[intcode[i + 2]];
    } else if (intcode[i] === 2) {
      intcode[intcode[i + 3]] =
        intcode[intcode[i + 1]] * intcode[intcode[i + 2]];
    }
    i += 4;
  }

  return intcode[0];
};

const max = 99;
const output = 19690720;
let isDone = false;

for (let i = 0; i <= max; i++) {
  for (let j = 0; j <= max; j++) {
    const outputValue = program(i, j);
    if (outputValue === output) {
      console.log('desired output value', outputValue);
      console.log('i', i);
      console.log('j', j);
      console.log('100*noun+verb', 100 * i + j);
      isDone = true;
      break;
    }
  }
  if (isDone) break;
}
