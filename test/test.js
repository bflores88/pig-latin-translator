'use strict';

const pigLatinTranslator = require('../js/app.js');
const englishToPigLatin = pigLatinTranslator.englishToPigLatin;
const pigLatinToEnglish = pigLatinTranslator.pigLatinToEnglish;
const chai = require('chai');
const should = chai.should();

describe ('english to pig latin', function (){

  it('should translate words starting with consonates', function() {
    englishToPigLatin('cat').should.equal('at-cay');
  });

  it('should translate words starting with vowels', function() {
    englishToPigLatin('apples').should.equal('apples-ay');
  });

  it('should translate sentences', function() {
    englishToPigLatin('pikachu, i choose you!').should.equal('ikachu-pay, i-ay oose-chay ou-yay!');
  });

});

describe ('pig latin to english', function (){

  it('should translate words starting with consonates', function() {
    let translatedWord = pigLatinToEnglish('eow-may');
    translatedWord.should.be.equal('meow');
  });
  
  it('should translate words starting with vowels', function() {
    let translatedWord = pigLatinToEnglish('igloo-ay');
    translatedWord.should.be.equal('igloo');
  });

  it('should translate phrases', function (){
    pigLatinToEnglish('op-stay, in-ay e-thay ame-nay of-ay ove-lay!').should.equal('stop, in the name of love!');
  });

});