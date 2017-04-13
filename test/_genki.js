/* globals describe: true, it: true */
'use strict';

var expect = require('chai').expect;
var genki = require('../index');

describe('genki.start', function() {
  var world = genki.start();

  it('should inject DOM elements with jQuery', function() {
    world.$('body').html(`
      <style>.box { height: 10px; }</style>

      <div class="box">Hello</div>
    `);
    var $box = world.$('.box');

    expect($box).to.exist;
  });

  it('should get computed CSS properties', function() {
    var $box = world.$('.box');

    expect($box.css('height')).to.equal('10px');
  });
});
