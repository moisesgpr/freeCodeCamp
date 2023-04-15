function convertHTML(str) {
    let convert = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "&") {
            convert += "&amp;";
        } else if (str[i] === "<") {
            convert += "&lt;";
        } else if (str[i] === ">") {
            convert += "&gt;";
        } else if (str[i] === '"') {
            convert += "&quot;";
        } else if (str[i] === "'") {
            convert += "&apos;";
        } else {
            convert += str[i];
        }
    }
    return convert
}
convertHTML("Dolce & Gabbana")

/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */