$(document).ready(() =>{
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(400);
  })

  $('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut('slow');
    $('.wrong-text-one').show('frown');
  })

  $('.wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut('slow');
    $('.wrong-text-two').show('frown');
  })

  $('.wrong-answer-three').on('click', () => {
    $('.wrong-text-three').fadeOut('slow');
    $('.wrong-text-three').show('frown');
  })

  $('.correct-answer').on('click', () => {
    $('correct-text-answer').show('smiley');
  })
});

console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('js/main.js', 'utf8');

describe('', function () {
  it('', function() {
    // Match for method call
    let structureMethod= function() {
      $('.first-image').hide();
    };
    let isMatchSelector = Structured.match(code, structureMethod);
    assert.isOk(isMatchSelector, 'Append .hide() to your selected image.');

  });
});
