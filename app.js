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

  pigLatinToEnglish: function(word) {
    //word verification
    if (typeof word !== 'string') {
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
