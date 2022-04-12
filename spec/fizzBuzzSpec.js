describe('Fizzbuzz', function () {

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  })

  it('returns the input number', function() {
    expect(fizzbuzz.play(1)).toEqual(1)
    expect(fizzbuzz.play(4)).toEqual(4)
  })

  it('returns FizzBuzz if number divisible by 15', function() {
    expect(fizzbuzz.play(15)).toEqual("FizzBuzz")
  })

  it('returns FizzBuzz if number divisible by 5', function() {
    expect(fizzbuzz.play(5)).toEqual("Buzz")
  })

  it('returns FizzBuzz if number divisible by 3', function() {
    expect(fizzbuzz.play(3)).toEqual("Fizz")
  })

})