function chunkArrayInGroups(arr, size) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr.slice(i, size + i))
        i += size - 1
    }
    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */