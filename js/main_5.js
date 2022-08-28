$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
  });

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });

  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  });
});

console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('js/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      on('click', () => {
        $('.nav-menu').show();
      })
    };


    let isMatch = Structured.match(code, structure);
    assert.isOk(isMatch, 'Did you change \'____\' to \'click\'?');
  });
});
