describe("FizzBuzz", function() {

  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should returns FizzBuzz if is divisible by 5 & 3", function() {
    expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
  });
});
