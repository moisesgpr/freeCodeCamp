function sumFibs(num) {
    let fib = [0, 1]
    let sum = 0

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1]
    }

    for (let j = 0; j < fib.length; j++) {
        if (fib[j] <= num && fib[j] % 2 == 1) {
            sum += fib[j]
        }
    }
    return sum;
}

sumFibs(10);

/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */