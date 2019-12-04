const min = 236491;
const max = 713787;

const passwords = [];
const doubleRegex = /([0-9])\1+/;

const increasing = numStr => {
  const arr = numStr.split('');

  for (let i = 1; i < arr.length; i++) {
    if (Number(arr[i - 1]) > Number(arr[i])) return false;
  }
  return true;
};

for (let i = min; i <= max; i++) {
  const iStr = i.toString();
  if (doubleRegex.test(iStr) && increasing(iStr)) passwords.push(i);
}

console.log('passwords', passwords.slice(passwords.length - 50));
console.log('password #', passwords.length);
