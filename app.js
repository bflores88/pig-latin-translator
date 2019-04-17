'use strict';

module.exports = {
  englishToPigLatin: function(word) {
    //word verification
    if (typeof word !== 'string' || Number(word) / 2) {
      console.log('Please enter a valid word.');
      return false;
    }

    //multi word verification
    if (word.split('').indexOf(' ') !== -1) {
      console.log('Please input a single word.');
      return false;
    }

    let firstLetterVowel = 'AEIOUaeiou';
    let appendage = 'ay';
    let firstLetter = word.slice(0, 1);

    if (firstLetterVowel.indexOf(firstLetter) === -1) {
      let pigLatin = word
        .split('')
        .splice(1, word.length)
        .join('')
        .concat(`-${firstLetter}${appendage}`);
      return pigLatin;
    } else {
      let pigLatin = word.concat(`-${appendage}`);
      return pigLatin;
    }
  },

  pigLatinToEnglish: function(word) {
    //word verification
    if (typeof word !== 'string' || Number(word) / 2) {
      console.log('Please enter a valid word.');
      return false;
    }

    //multi word verification
    if (word.split('').indexOf(' ') !== -1) {
      console.log('Please input a single word.');
      return false;
    }

    //check last three letters of word
    let lastThree = word.length - 3;
    let lastThreeLetters = word.split('').splice(lastThree, 3);

    if (lastThreeLetters[0] !== '-') {
      let firstPart = word
        .split('')
        .splice(0, word.length - 4)
        .join('');
      let englishWord = lastThreeLetters[0] + firstPart;
      return englishWord;
    } else {
      let firstPart = word
        .split('')
        .splice(0, lastThree)
        .join('');
      return firstPart;
    }
  },
};
