function destroyer(arr) {

    let newArr = []
    let result = []

    for (let i = 1; i < arguments.length; i++) {
        newArr.push(arguments[i])
    }

    arr.forEach(item => {
        if (!newArr.includes(item)) {
            result.push(item)
        }
    })

    return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. */