'use strict';

var expect = require('chai').expect;
var genki = require('../index');

describe('genki.css', function() {

  it('should add styles from a CSS file', function() {
    var world = genki.start({
      file: 'test/css/bus.css',
    });
    world.$('body').html(`
      <div class="double-cheesecakey">Hello</div>
    `);
    var $box = world.$('.double-cheesecakey');

    expect($box.css('padding')).to.equal('10px');
  });

  it('should add styles from an SCSS file', function() {
    var world = genki.start({
      file: 'test/css/batsu.scss',
    });
    world.$('body').html(`
      <div class="tanaka thai-kick-u">OMG</div>
    `);
    var $box = world.$('.tanaka');

    expect($box.css('position')).to.equal('fixed');
  });

  it('should be able to access Barista data', function() {
    var world = genki.start({
      file: 'test/css/batsu.scss',
    });

    expect(world.styles).to.exist;
    expect(world.styles.data).to.exist;
    expect(world.styles.data.nodes).to.exist;
  });
});
