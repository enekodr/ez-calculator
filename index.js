exports.calculate = function (operation) {

    operation = parseParentheses(operation)
    operation = parseMathLib(operation)

    try {
        return eval(operation)
    }
    catch (e) {
        console.log(e)
        return null
    }
    
}

exports.degToRad = function (degrees) {
    return degrees * Math.PI / 180
}


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

function parseParentheses (operation) {
    // Searches for any multiplying syntax (e.g 7(3 + 5), or 2cos(11))
    var regexp = new RegExp(/(\d(\(|sin|cos|tab|arcsin|arccos|arctan|sqrt))+/)
    var multiplication = operation.search(regexp)

    // Puts an '*' between the number and the parenthesis for eval() to be able to perform the operation
    while (multiplication >= 0) {
        operation = operation.substr(0, multiplication + 1) + '*' + operation.substr(multiplication + 1)
        multiplication = operation.search(regexp)
    }

    return operation
}

function parseMathLib (operation) {
    // Searches for Math library functions and adds a 'Math.' to match the correct syntax
    var expression = operation.search(/(sin|cos|tan|arcsin|arccos|arctan|sqrt)/)
    var mathLib = operation.indexOf('Math.')

    while ((expression >= 0 && mathLib < 0) && mathLib != expression - 5) {
        operation = operation.substr(0, expression) + 'Math.' + operation.substr(expression)
        expression = operation.indexOf('sin')
        mathLib = operation.indexOf('Math.')
    }

    return operation
}