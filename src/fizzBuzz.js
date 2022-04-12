class Fizzbuzz {

  play(number) {
    if (number % 15 === 0) {
      return "FizzBuzz"
    }
    else if (number % 5 === 0) {
      return "Buzz"
    }
    else if (number % 3 === 0) {
      return "Fizz"
    }
    return number
  }
}

let fizzbuzz = new Fizzbuzz();
const body = document.querySelector('body')

for (let i = 1; i <= 100; i++) {
  // console.log(fizzbuzz.play(i));
  body.innerHTML += `<p>${fizzbuzz.play(i)}</p>`
}