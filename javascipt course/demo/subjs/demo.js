
const sqrtFn = (a) => Math.sqrt(a)
const sqrFn = (a) => Math.pow(a,2)

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  console.log(sum);
  myCallback(sum);
}

const j = myCalculator(5, 5, sqrtFn);
console.log(j)
