'use strict';

function pigLatinTranslator(word) {
  //word verification
  if (typeof word !== 'string' || Number(word)/2) {
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
    console.log(word.split('').splice(1, word.length))
    let pigLatin = word.split('').splice(1, word.length).join('').concat(`-${firstLetter}${appendage}!`);
    console.log(pigLatin);
    return pigLatin;
  } else {
    let pigLatin = word.concat(`-${appendage}!`);
    console.log(pigLatin);
    return pigLatin;
  }
}

pigLatinTranslator('beaver');
