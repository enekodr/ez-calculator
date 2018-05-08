exports.isPrime = function (number) {
    for (var i = 2; i <= number / 2; i++)
        if (number % i == 0)
            return false

    return true
}


exports.isPerfect = function (number) {
    return this.factors(number).reduce(function(acc, val) { return acc + val }) == number
}


exports.isSquare = function (number) {
    return Math.sqrt(number) % 1 === 0
}


exports.areAmicable = function (a, b) {
    var aFactorSum = this.factors(a).reduce(function(acc, val) { return acc + val })
    var bFactorSum = this.factors(b).reduce(function(acc, val) { return acc + val })

    return aFactorSum == b && bFactorSum == a
}


exports.isFibonacci = function (number) {
    return this.isSquare(5 * (number * number) - 4) || this.isSquare(5 * (number * number) + 4)
}


exports.factorial = function (number) {
    var result = 1

    for (var i = 2; i <= number; i++)
        result *= i

    return result
}


exports.factors = function (number) {
    var factors = new Array

    for (var i = 1; i <= number / 2; i++)
        if (number % i == 0)
            factors.push(i)

    return factors
}


exports.primesBefore = function (number) {
    var primes = new Array

    for (var i = 1; i < number; i++)
        if (this.isPrime(i))
            primes.push(i)

    return primes
}

exports.fibonazziBefore = function (number) {
    var fibonazzies = new Array

    for (var i = 1; i < number; i++)
        if (this.isFibonacci(i))
            fibonazzies.push(i)

    return fibonazzies
}