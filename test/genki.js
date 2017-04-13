'use strict';

var expect = require('chai').expect;
var genki = require('../index');

describe('basic', function() {
  it('should do a thing', function() {
    var world = genki.start();

    world.$('body').html(`
      <div class="box" style="height: 10px;">Hello</div>
    `);

    var $box = world.$('.box');
    expect($box.css('height')).to.equal('10px');
  });
});
