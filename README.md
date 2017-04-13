# genki [![Build Status](https://travis-ci.org/ItsJonQ/genki.svg?branch=master)](https://travis-ci.org/ItsJonQ/genki) [![npm version](https://badge.fury.io/js/genki.svg)](https://badge.fury.io/js/genki)

Easy CSS unit testing in Node. Genki desu!

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
      <div class="box" style="height: 10px;">Hello</div>
    `);
    var $box = world.$('.box');

    expect($box.css('height')).to.equal('10px');
  });
});
```

Stay 元気 ❤️!
