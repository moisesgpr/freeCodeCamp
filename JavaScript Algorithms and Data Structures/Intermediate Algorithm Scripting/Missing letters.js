function fearNotLetter(str) {

    let abc = "abcdefghijklmnopqrstuvwxyz"
    let index = abc.indexOf(str[0]);
    let cutabc = abc.slice(index)
    let test = ''

    for (let i = 0; i < cutabc.length; i++) {
        test += cutabc[i]

        if (str.match(test) == null)
            return cutabc[i]
    }
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");

/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */