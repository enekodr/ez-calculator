# EZ-Calculator

ez-calculator is a Node.js package for performing some math operations and functions.

## How to install
Open the terminal, navigate to the project folder and type:
```
npm install --save ez-calculator
```
It is possible to install using the git repo:
```
npm install --save https://github.com/enekodr/ez-calculator.git
```
## Usage
In 'file.js':
```javascript
var calc = require('ez-calculator');
```

## Methods
##### isPrime(n)
Returns `true`or `false` whether **n** has no factors (except of 1 and itself) or yes
##### isPerfect(n)
Returns `true`or `false` whether **n** the sum of its factors is equal to itself or not
##### isSquare(n)
Returns `true`or `false` whether **n** is the result of squaring a number or not
##### isFibonazzi(n)
Returns `true`or `false` whether **n** is included in the Fibonazzi series
##### areAmicable(a, b)
Returns `true`or `false` whether the sum of factors of **a** is equal to **b** and vice versa
##### factorial(n)
Returns the factorial of **n**
##### factors(n)
Returns an array with the factors of **n**
##### primesBefore(n)
Returns an array containing all the primes numbers before **n**
##### fibonazziBefore(n)
Returns an array containing all the numbers of Fibonazzi series before **n**

## Examples
Writes in console some interesting data
```javascript
var calc = require('ez-calculator');

console.log(calc.areAmicable(220, 284));
console.log(calc.factors(1116));
```

Tells which numbers are prime in the Fibonazzi series before the number `100`
```javascript
var calc = require('ez-calculator');

var fibonazzies = calc.fibonazziBefore(100)
for (var i = 0; i < fibonazzies.length; i++) {
  if (calc.isPrime(fibonazzies[i])) {
    console.log(fibonazzies[i] + ' is prime and is in Fibonazzi series');
  }
}
