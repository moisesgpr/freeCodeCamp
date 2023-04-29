function sumarDos(arr, num) {
    let newArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        let j = arr[i + 1]
        if (arr[i] + j == num) {
            newArr.push(arr[i], j)
            break
        } else 'error'
    }
    return newArr
}
let result = sumarDos([1, 2, 3, 4], 5)