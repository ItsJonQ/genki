/* globals describe: true, it: true */
/* jshint expr: true */
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
    world.addStyle({
      file: 'test/css/bus.css',
    });
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
    world.addStyle({
      file: 'test/css/batsu.scss',
    });
    var $box = world.$('.tanaka');

    expect($box.css('position')).to.equal('fixed');
  });

  it('should not have CSSOM by default', function() {
    var world = genki.start({
      file: 'test/css/batsu.scss',
    });

    expect(world.styles[0].data).to.be.false;
    expect(world.styles[0].$('.tanaka')).to.be.false;
  });

  it('should be able to access Barista data if enableCSSOM: true', function() {
    var world = genki.start({
      enableCSSOM: true,
      file: 'test/css/batsu.scss',
    });

    expect(world.styles).to.exist;
    expect(world.styles[0].data).to.exist;
    expect(world.styles[0].data.nodes).to.exist;
  });
});
