function palindrome(str) {
    let words = str.match(/[A-Za-z]+|\d+/g).join(''),
        reverse = '',
        word = ''

    for (let i = 0; i < words.length; i++) {

        word += words[i].toLowerCase()
    }

    for (let i = words.length - 1; 0 <= i; i--) {

        reverse += words[i].toLowerCase()
    }

    return word == reverse
}

palindrome("A man, a plan, a canal. Panama");

/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. */