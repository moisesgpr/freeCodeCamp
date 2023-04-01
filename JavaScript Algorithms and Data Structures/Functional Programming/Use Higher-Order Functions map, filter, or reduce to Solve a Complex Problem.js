const squareList = arr => {
    // Only change code below this line

    let positiveIntegers = arr.filter(x => Number.isInteger(x) && x >= 0);

    const finalResult = positiveIntegers.map(myFunction)

    function myFunction(y) {
        return Math.pow(y, 2);
    }
    return finalResult;
    // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

/* Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function. */