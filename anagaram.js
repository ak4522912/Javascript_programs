const isAnagram = (str1, str2) => {
    if (!isValid(str1, str2)) {
        return new Error("Invalid input");
    }

    const charCount = new Map();

    // Count characters in str1
    for (const char of str1) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Compare with str2
    for (const char of str2) {
        if (!charCount.has(char) || charCount.get(char) === 0) {
            return new Error("Not an anagram");
        }
        charCount.set(char, charCount.get(char) - 1);
    }

    return "Strings are anagrams";
};

const isValid = (str1, str2) => {
    return str1 && str2 && str1.length === str2.length;
};

const prompt = require('prompt-sync')();
const str1 = prompt("Enter string 1: ");
const str2 = prompt("Enter string 2: ");
console.log(isAnagram(str1, str2));

module.exports = isAnagram;
