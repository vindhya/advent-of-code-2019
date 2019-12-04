const fs = require('fs');

let wire1;
let wire2;
try {
  wire1 = fs
    .readFileSync('./puzzle-input1.txt')
    .toString()
    .split(',');
  wire2 = fs
    .readFileSync('./puzzle-input2.txt')
    .toString()
    .split(',');
} catch (err) {
  console.error(err);
}

const wire1Coords = [];
const num = Number(wire1[0].substring(1));

switch (wire1[0].charAt(0)) {
  case 'U':
    for (let i = 0; i < num; i++) {
      wire1Coords.push([0, i]);
    }
    break;
  case 'R':
    for (let i = 0; i < num; i++) {
      wire1Coords.push([i, 0]);
    }
    wire1Coords.push([num, 0]);
    break;
  case 'D':
    for (let i = 0; i < num; i++) {
      wire1Coords.push([0, -i]);
    }
    break;
  case 'L':
    for (let i = 0; i < num; i++) {
      wire1Coords.push([-i, 0]);
    }
    break;
}

console.log('wire1Coords', wire1Coords.length);

for (let i = 1; i < wire1.length; i++) {
  const direction = wire1[i].charAt(0);
  const amount = Number(wire1[i].substring(1));

  switch (direction) {
    case 'U':
      for (let j = 0; j < amount; j++) {
        wire1Coords.push([
          wire1Coords[wire1Coords.length - 1][0],
          wire1Coords[wire1Coords.length - 1][1] + 1
        ]);
      }
      break;
    case 'R':
      for (let j = 1; j <= amount; j++) {
        wire1Coords.push([
          wire1Coords[wire1Coords.length - 1][0] + 1,
          wire1Coords[wire1Coords.length - 1][1]
        ]);
      }
      break;
    case 'D':
      for (let j = 1; j <= amount; j++) {
        wire1Coords.push([
          wire1Coords[wire1Coords.length - 1][0],
          wire1Coords[wire1Coords.length - 1][1] - 1
        ]);
      }
      break;
    case 'L':
      for (let j = 1; j <= amount; j++) {
        wire1Coords.push([
          wire1Coords[wire1Coords.length - 1][0] - 1,
          wire1Coords[wire1Coords.length - 1][1]
        ]);
      }
      break;
  }
}

console.log('middle of wire1Coords', wire1Coords.slice(1000));
console.log('end of wire1Coords', wire1Coords.slice(wire1Coords.length - 10));
console.log('wire1Coords', wire1Coords.length);

const wire2Coords = [];
const num2 = Number(wire2[0].substring(1));

switch (wire2[0].charAt(0)) {
  case 'U':
    for (let i = 0; i < num2; i++) {
      wire2Coords.push([0, i]);
    }
    break;
  case 'R':
    for (let i = 0; i < num2; i++) {
      wire2Coords.push([i, 0]);
    }
    break;
  case 'D':
    for (let i = 0; i < num2; i++) {
      wire2Coords.push([0, -i]);
    }
    break;
  case 'L':
    for (let i = 0; i < num2; i++) {
      wire2Coords.push([-i, 0]);
    }
    break;
}

console.log('wire2Coords', wire2Coords.length);

for (let i = 1; i < wire2.length; i++) {
  const direction = wire2[i].charAt(0);
  const amount = Number(wire2[i].substring(1));

  switch (direction) {
    case 'U':
      for (let j = 0; j < amount; j++) {
        wire2Coords.push([
          wire2Coords[wire2Coords.length - 1][0],
          wire2Coords[wire2Coords.length - 1][1] + 1
        ]);
      }
      break;
    case 'R':
      for (let j = 1; j <= amount; j++) {
        wire2Coords.push([
          wire2Coords[wire2Coords.length - 1][0] + 1,
          wire2Coords[wire2Coords.length - 1][1]
        ]);
      }
      break;
    case 'D':
      for (let j = 1; j <= amount; j++) {
        wire2Coords.push([
          wire2Coords[wire2Coords.length - 1][0],
          wire2Coords[wire2Coords.length - 1][1] - 1
        ]);
      }
      break;
    case 'L':
      for (let j = 1; j <= amount; j++) {
        wire2Coords.push([
          wire2Coords[wire2Coords.length - 1][0] - 1,
          wire2Coords[wire2Coords.length - 1][1]
        ]);
      }
      break;
  }
}

console.log('middle of wire2Coords', wire2Coords.slice(1000));
console.log('end of wire2Coords', wire2Coords.slice(wire2Coords.length - 10));
console.log('wire2Coords', wire2Coords.length);

try {
  const data1 = fs.writeFileSync('./output1.txt', wire1Coords);
  const data2 = fs.writeFileSync('./output2.txt', wire2Coords);
  //file written successfully
} catch (err) {
  console.error(err);
}

const matchingCoords = [];

for (let i = 0; i < wire1Coords.length; i++) {
  if (wire2Coords.includes(wire1Coords[i])) matchingCoords.push(wire1Coords[i]);
}

console.log('matchingCoords', matchingCoords);
