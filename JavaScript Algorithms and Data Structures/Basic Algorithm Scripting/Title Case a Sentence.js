function titleCase(str) {
    let result = ""
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        let firstWord = words[i][0].toUpperCase()
        let leftWord = words[i].substr(1).toLowerCase()
        let wholeWord = firstWord.concat(leftWord)
        result += wholeWord + ' '
    }
    return result.trim()
}

titleCase("sHoRt AnD sToUt");

/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */