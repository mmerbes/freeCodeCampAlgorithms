function sumPrimes(num) {
    var primes = [2];
    for(i=3; i <= num; ++i) {
        if ( isPrime(i)) {
            primes.push(i);
        }
    }
    console.log(primes[primes.length-1]);
    sum = primes.reduce((num, curr) => num + curr);
    return sum;
}

function isPrime(prime) {
    for(var i = 2; i < prime; i++) {
        if ( prime % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(sumPrimes(977));
