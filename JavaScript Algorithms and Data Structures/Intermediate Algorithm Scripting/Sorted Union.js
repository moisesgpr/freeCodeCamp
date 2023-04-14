function uniteUnique(arr) {

    let newArr = [...arguments]
    let newArr1 = []

    for (let i = 0; i < newArr.length; i++) {
        newArr[i].map(num => {
            if (!newArr1.includes(num)) {
                newArr1.push(num)
            }
        })
    }

    return newArr1;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])

/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */