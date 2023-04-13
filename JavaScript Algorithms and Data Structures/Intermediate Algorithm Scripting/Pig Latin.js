function translatePigLatin(str) {

    let vocales = /[aeiou]/g
    let index = str.search(vocales)
  
    if (index > 0) {
      return str.slice(index) + str.slice(0, index) + "ay"
    }
    if (index == 0) {
      return str.slice(index) + "way"
    }
  
    return str + "ay";
  }
  
  translatePigLatin("algorithm")

/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */