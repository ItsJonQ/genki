/* globals describe: true, it: true */
/* jshint expr: true */
'use strict';

var expect = require('chai').expect;
var genki = require('../index');

describe('genki.addStyle', function() {
  var world = genki.start();
  world.$('body').html(`
    <div class="hosei">It's a science</div>
  `);

  it('should start with no styles', function() {
    expect(world.styles.length).to.equal(0);
  });

  it('should add a single <style> with .addStyle()', function() {
    world.addStyle({
      content: `.hosei { background: blue }`,
    });
    var $el = world.$('.hosei');

    expect(world.styles.length).to.equal(1);
    // expect(world.$('style').length).to.equal(1);
    expect($el.css('background')).to.equal('blue');
  });

  it('should add additiontal <style> with .addStyle()', function() {
    world.addStyle({
      content: `.hosei { padding: 10px }`,
    });
    var $el = world.$('.hosei');

    expect(world.styles.length).to.equal(2);
    // expect(world.$('style').length).to.equal(2);
    expect($el.css('padding')).to.equal('10px');
  });
});
