const Sub = require('./sub');
const Mul = require('./mul');

const factorial = function(num = 0) {
  if (num === '0') return '1';
  const fact = new Mul(num, factorial(new Sub(num, '1').result)).result;
  console.log(`\nFactorial of ${num} is ${fact} \n `);
  return fact;
};

console.log(factorial(process.argv[2]));
