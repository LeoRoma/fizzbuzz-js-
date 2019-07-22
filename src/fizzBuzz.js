function FizzBuzz() {
}
FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}
