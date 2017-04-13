'use strict';

var expect = require('chai').expect;
var genki = require('../index');

describe('genki', function() {
  var world = genki.start();

  it('should inject DOM elements with jQuery', function() {
    world.$('body').html(`
      <div class="box" style="height: 10px;">Hello</div>
    `);
    var $box = world.$('.box');

    expect($box).to.exist;
  });

  it('should get computed CSS properties', function() {
    var $box = world.$('.box');

    expect($box.css('height')).to.equal('10px');
  });
});
