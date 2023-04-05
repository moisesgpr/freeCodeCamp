function sumAll(arr) {
    arr.sort(function (a, b) {
        return a - b
    });
    let newArr = []
    let total = 0;
    let lowest = arr[0];
    let highest = arr[1];

    for (let i = lowest; i <= highest; i++) {
        newArr.push(i);
    }

    newArr.forEach(myFunction);

    function myFunction(num) {
        total += num;
    }
    return total;
}

sumAll([1, 4]);

/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */