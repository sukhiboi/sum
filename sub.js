const Sum = require('./sum');

const lastDigit = num => {
  const last = +num.slice(-1)[0] || 0;
  return last;
};

const secondLastDigit = num => {
  const last = +num.slice(-2)[0] || 0;
  return last;
};

class Sub extends Sum {
  constructor(num1, num2) {
    super(num1, num2);
  }

  largestNumber() {
    return this.a;
  }

  addLastDigits() {
    this.digit = this.carry + lastDigit(this.a) - lastDigit(this.b);
    if (lastDigit(this.a) < lastDigit(this.b)) {
      this.digit = 10 + lastDigit(this.a) - lastDigit(this.b);
      this.a[this.a.length - 2] = (secondLastDigit(this.a) - 1).toString();
    }
  }

  get result() {
    const sum = this.performSum().split('');
    if (sum.every(dig => dig === '0')) return '0';
    while (sum[0] === '0') {
      sum.shift();
    }
    return sum.join('');
  }
}

module.exports = Sub;
