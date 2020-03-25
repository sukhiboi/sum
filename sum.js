const lastDigit = num => {
  const last = +num.slice(-1)[0] || 0;
  return last;
};

const largestNum = (a, b) => (a.length > b.length ? a : b);

const parseNumbers = (...numbers) => numbers.map(num => Array.from(num));

class Sum {
  constructor(num1, num2) {
    this.originalA = num1;
    this.originalB = num2;
    this.a = num1;
    this.b = num2;
    this.solution = [];
    this.carry = 0;
    this.digit = 0;
  }

  restoreOriginalValues() {
    this.a = this.originalA;
    this.b = this.originalB;
  }

  formatInput() {
    const [a, b] = parseNumbers(this.a, this.b);
    this.a = a;
    this.b = b;
  }

  largestNumber() {
    return largestNum(this.a, this.b);
  }

  resetCarry() {
    this.carry = 0;
  }

  updateCarry() {
    this.carry = (this.digit - (this.digit % 10)) / 10;
  }

  updateDigit() {
    this.digit = this.digit % 10;
  }

  addLastDigits() {
    this.digit = this.carry + lastDigit(this.a) + lastDigit(this.b);
  }

  updateResult() {
    this.solution.unshift(this.digit);
  }

  addLastCarry() {
    if (this.carry) this.solution.unshift(this.carry);
  }

  removeLastDigits() {
    [this.a, this.b].forEach(num => num.pop());
  }

  formatResult() {
    return this.solution.join('');
  }

  performSum() {
    this.formatInput();
    while (this.largestNumber().length) {
      this.addLastDigits();
      this.resetCarry();
      if (this.digit > 9) {
        this.updateCarry();
        this.updateDigit();
      }
      this.updateResult();
      this.removeLastDigits();
    }
    this.addLastCarry();
    return this.formatResult();
  }

  get result() {
    return this.performSum();
  }
}

module.exports = Sum;
