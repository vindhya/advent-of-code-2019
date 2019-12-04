// const min = 236491;
const min = 300000;
// const max = 713787;
const max = 400000;

const passwords = [];
const doubleRegex = /([0-9])\1+/;

const increasing = numStr => {
  const arr = numStr.split('');

  if (Number(arr[0]) > Number(arr[1])) return false;

  for (let i = 1; i < arr.length; i++) {
    if (Number(arr[i - 1]) > Number(arr[i])) return false;
  }
  return true;
};

for (let i = min; i <= max; i++) {
  const iStr = i.toString();
  if (doubleRegex.test(iStr) && increasing(iStr)) passwords.push(i);
}

console.log('passwords', passwords);
console.log('password #', passwords.length);
