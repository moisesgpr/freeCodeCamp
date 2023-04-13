function spinalCase(str) {

    let space = str.replace(/([a-z])([A-Z])/g, '$1 $2')

    let test = space.replace(/\s+|W+|_/g, '-').toLowerCase()


    console.log(test)

    return test;
}

spinalCase("This Is Spinal Tap");

/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */