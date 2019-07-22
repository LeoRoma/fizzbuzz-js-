describe("FizzBuzz", function() {

  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should returns FizzBuzz if is divisible by 5 & 3", function() {
    expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
  });

  it("should returns Fizz if is divisible by 3", function() {
    expect(fizzBuzz.play(3)).toEqual('Fizz');
  });

  it("should returns Buzz if is divisible by 5", function() {
    expect(fizzBuzz.play(5)).toEqual('Buzz');
  });

  it("should returns number if is not divisible by 5 or 3", function() {
    expect(fizzBuzz.play(7)).toEqual(7);
  });


});
