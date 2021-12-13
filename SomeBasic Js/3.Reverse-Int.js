const num = 3842;

function reverseGivenInteger(num) {
  // write your solution here
  let reversedNum = 0;
  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNum;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
