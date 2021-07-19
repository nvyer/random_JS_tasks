// 1. Write a function that accepts an array of strings. Return the longest string.

let words = ['Jim', 'Dwight', 'Michael', 'Pam', 'Andy'];

// 1st solutions
const findLongestWord = (arr) => {
    let longestWord = '';
    arr.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord
};

console.log(findLongestWord(words));

// 2nd solution
const findLongestWord = words.reduce((a, b) => a.length > b.length ? a : b);
console.log(findLongestWord);

// 3rd solution
const findLongestWord = words.sort((a, b) => b.length - a.length)[0];
console.log(findLongestWord);

// 4th solution
const longestWord = words.find(el => el.length === Math.max(...(words.map(el => el.length))));
console.log(longestWord)

// 2. Write a function that takes a string, and returns the character that is most commonly used in the string
const letter = 'banana';

// 1st solution


