function convertToRoman(num) {
    let romanNumbers = "",
        romanTable = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        },
        size = Object.keys(romanTable).length,
        romans = Object.keys(romanTable),
        numbers = Object.values(romanTable)

    for (let i = 0; i < size; i++) {
        while (num >= numbers[i]) {
            romanNumbers += romans[i]
            num -= numbers[i]
        }
    }

    return romanNumbers;
}

convertToRoman(36);

/* Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case. */