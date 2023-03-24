function bouncer(arr) {
    const newArr = arr.filter(falsyValues);

    function falsyValues(arr) {
        return arr;
    }
    return newArr;
}

bouncer([7, "ate", "", false, 9]);

/* Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. */