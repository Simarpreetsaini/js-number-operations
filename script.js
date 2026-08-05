let num1 = 5;
let num2 = 10;
let num3 = 139;
let num4 = 153;
let num5 = 28;

let numbersToTest = [num1, num2, num3, num4, num5];

let sumN = 0;
for (let i = 0; i <= num1; i++) {
  sumN += i;
}
console.log("Sum of first " + num1 + " numbers: " + sumN);

console.log("Table of " + num2 + ":");
for (let i = 1; i <= 10; i++) {
  console.log(num2 + " x " + i + " = " + num2 * i);
}
for (let k = 0; k < numbersToTest.length; k++) {
  let currentNum = numbersToTest[k];

  console.log("Ex - Number :- " + currentNum);

  let tempSum = currentNum;
  let digitSum = 0;
  while (tempSum > 0) {
    digitSum += tempSum % 10;
    tempSum = Math.floor(tempSum / 10);
  }
  console.log("Sum of its digits: " + digitSum);

  let tempArm = currentNum;
  let armSum = 0;
  while (tempArm > 0) {
    let digit = tempArm % 10;
    armSum += Math.pow(digit, 3);
    tempArm = Math.floor(tempArm / 10);
  }
  let isArmstrong = armSum === currentNum ? "Yes" : "No";
  console.log("Is it an Armstrong number? " + isArmstrong);

  let isPrime = currentNum > 1;
  for (let i = 2; i <= Math.sqrt(currentNum); i++) {
    if (currentNum % i === 0) {
      isPrime = false;
      break;
    }
  }
  let primeResult = isPrime ? "Yes" : "No";
  console.log("Is it a prime number? " + primeResult);

  let factors = [];
  for (let i = 1; i <= currentNum; i++) {
    if (currentNum % i === 0) {
      factors.push(i);
    }
  }
  console.log("Factors: " + factors.join(", "));
  console.log("-----------------------------------");
}
