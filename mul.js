const Sum = require('./sum');
const Sub = require('./sub');

// const mul = function(num1, num2) {
//   let result = '0';
//   const a = num1;
//   let b = num2;
//   while (b !== '0') {
//     result = new Sum(result, a).result;
//     b = new Sub(b, '1').result;
//   }
//   return result;
// };

class Mul extends Sum {
  constructor(num1, num2) {
    super(num1, num2);
    this.answer = 0;
  }

  get result() {
    this.restoreOriginalValues();
    while (this.b !== '0') {
      this.answer = new Sum(this.a, this.answer).result;
      this.b = new Sub(this.b, '1').result;
    }
    return this.answer;
  }
}

module.exports = Mul;
