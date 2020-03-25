const Sum = require('./sum');
const Mul = require('./mul');

function fact(num) {
  let rval = '1';
  for (let i = '2'; i != new Sum(num, '1').result; i = new Sum(i, '1').result) {
    rval = new Mul(rval, i).result;
  }
  return rval;
}

const main = function(num) {
  for (let i = '1'; i != num; i = new Sum(i, '1').result) {
    console.log(`Fact of ${i} is ${fact(i)}`);
  }
};

main(process.argv[2]);
