'use strict';

module.exports = {
  englishToPigLatin: function(string) {
    //word verification
    if (typeof string !== 'string') {
      console.log('Please enter a valid word.');
      return false;
    }

    let vowels = 'aeiouAEIOU';
    let punctuation = ';:!.,';

    let strArr = string.split(' ');
    let resultArr = [];

    for (let i = 0; i < strArr.length; i++) {
      let word = strArr[i];
      let spliceLength = 0;
      let pigLatin = '';
      let addPunctuation = '';

      let findPunctuation = word[word.length - 1];
      if (punctuation.indexOf(findPunctuation) !== -1) {
        addPunctuation = findPunctuation;
      }

      for (let j = 0; j < word.length; j++) {
        if (vowels.indexOf(word[j]) >= 0) {
          break;
        } else {
          spliceLength++;
        }
      }

      if (spliceLength === 0) {
        pigLatin = word.concat('-ay');
        resultArr.push(pigLatin);
      } else {
        let spliceWord = word
          .split('')
          .slice(0, spliceLength)
          .join('');

        if (addPunctuation === '') {
          pigLatin = word
            .split('')
            .slice(spliceLength, word.length)
            .join('')
            .concat('-')
            .concat(spliceWord)
            .concat('ay');
          resultArr.push(pigLatin);
        } else {
          pigLatin = word
            .split('')
            .slice(spliceLength, word.length - 1)
            .join('')
            .concat('-')
            .concat(spliceWord)
            .concat('ay')
            .concat(addPunctuation);
          resultArr.push(pigLatin);
        }
      }
    }

    let result = resultArr.join(' ');
    console.log(result);

    return result;
  },

  pigLatinToEnglish: function(string) {
    //word verification
    if (typeof string !== 'string') {
      return false;
    }

    let strArr = string.split(' ');
    let punctuation = ';:!.,';
    let resultArr = [];

    for (let i = 0; i < strArr.length; i++) {
      let currentWord = strArr[i];
      let pigLatinIndex = currentWord.indexOf('-');
      let englishPrefix = '';
      let englishSuffix = currentWord.slice(0, pigLatinIndex);
      let pigLatinWork = currentWord.slice(pigLatinIndex, currentWord.length);
      let addPunctuation = '';

      let lastLetter = pigLatinWork[pigLatinWork.length - 1];
      if (punctuation.indexOf(lastLetter) !== -1) {
        addPunctuation = lastLetter;
      }

      for (let j = 1; j < pigLatinWork.length; j++) {
        if (pigLatinWork[j] === 'a') {
          break;
        } else {
          englishPrefix += pigLatinWork[j];
        }
      }

      resultArr.push(englishPrefix.concat(englishSuffix).concat(addPunctuation));
    }

    let result = resultArr.join(' ');
    return result;
  },
};
