function steamrollArray(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        //  console.log(arr[i])
        if (!Array.isArray(arr[i])) {
            newArr.push(arr[i])
        } else if (!Array.isArray(arr[i][0]) && arr[i] !== undefined) {
            //  console.log(arr[i])
            for (let j = 0; j < i; j++) {
                //  console.log(arr[i][j])
                if (!Array.isArray(arr[i][j]) && arr[i][j] !== undefined) {
                    newArr.push(arr[i][j])
                } else {
                    for (let k = 0; k < j; k++) {
                        //  console.log(arr[i][j][k][k])
                        if (!Array.isArray(arr[i][j][k][k])) {
                            newArr.push(arr[i][j][k][k])
                        }
                    }
                }
            }
        } else {
            //  console.log(arr[i])
            newArr.push(arr[i].pop().shift())
        }
    }
    //  console.log(newArr)
    return newArr;
}

steamrollArray([
    [
        ["a"]
    ],
    [
        ["b"]
    ]
]);

/* Flatten a nested array. You must account for varying levels of nesting. */