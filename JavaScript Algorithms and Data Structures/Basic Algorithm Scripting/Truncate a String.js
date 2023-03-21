function truncateString(str, num) {
    if (num >= str.length) {
        return str
    } else return str.substr(0, num) + '...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */