# genki [![Build Status](https://travis-ci.org/ItsJonQ/genki.svg?branch=master)](https://travis-ci.org/ItsJonQ/genki) [![npm version](https://badge.fury.io/js/genki.svg)](https://badge.fury.io/js/genki)

Easy CSS unit testing in Node. Keep that CSS genki desu!

## Getting Started

```
npm install genki --save-dev
```

## Example

```js
var expect = require('chai').expect;
var genki = require('../index');
var world = genki.start();

describe('simple test', function() {
  it('should look right', function() {
    world.$('body').html(`
      <style>.box { height: 10px; }</style>

      <div class="box">Hello</div>
    `);
    var $box = world.$('.box');

    expect($box.css('height')).to.equal('10px');
  });
});
```

Stay 元気 ❤️!
