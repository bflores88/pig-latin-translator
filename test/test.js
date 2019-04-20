'use strict';

const pigLatinTranslator = require('../app.js');
const englishToPigLatin = pigLatinTranslator.englishToPigLatin;
const pigLatinToEnglish = pigLatinTranslator.pigLatinToEnglish;
const chai = require('chai');
const should = chai.should();

describe ('pig-latin-translator', function (){

  it('should translate words starting with consonates', function() {
    let translatedWord = englishToPigLatin('cat');
    translatedWord.should.be.equal('at-cay');
  });

  it('should translate words starting with vowels', function() {
    let translatedWord = englishToPigLatin('apples');
    translatedWord.should.be.equal('apples-ay');
  });

  it('should translate sentences', function() {
    let translatedWord = englishToPigLatin('pikachu, i choose you!');
    translatedWord.should.be.equal('ikachu-pay, i-ay oose-chay ou-yay!');
  });

  it('should translate words starting with consonates', function() {
    let translatedWord = pigLatinToEnglish('eow-may');
    translatedWord.should.be.equal('meow');
  });

  it('should translate words starting with vowels', function() {
    let translatedWord = pigLatinToEnglish('igloo-ay');
    translatedWord.should.be.equal('igloo');
  });

});