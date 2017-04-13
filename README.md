# genki [![Build Status](https://travis-ci.org/ItsJonQ/genki.svg?branch=master)](https://travis-ci.org/ItsJonQ/genki) [![npm version](https://badge.fury.io/js/genki.svg)](https://badge.fury.io/js/genki)

Easy CSS unit testing in Node. Keep that CSS genki desu!

## Getting Started

```
npm install genki --save-dev
```

## Example

```js
var expect = require('chai').expect;
var genki = require('genki');
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

Let's break it down 💪

### Step 1: Bring it in

Require genki into your `.js` file:

```js
var expect = require('chai').expect; // Not necessary, but chai is nice
var genki = require('../index');
```

### Step 2: Create your world

Generate your virtual DOM (powered by [jsdom](https://github.com/tmpvar/jsdom)) by executing `genki.start()`. In the example below, genki's virtual DOM is assigned to the variable `world`.

```js
var world = genki.start();
```

### Step 3: Add your elements

Genki's virtual DOM comes equipt with [jQuery](https://github.com/jquery/jquery). Use the `.$()` to add stuff to your world:

```js
world.$('body').html(`
  <style>.box { height: 10px; }</style>

  <div class="box">Hello</div>
`);
```

### Step 4: Test your element's style 😎

Using jQuery's [`.css()`](http://api.jquery.com/css/) method, you can check your element's computed CSS against your test assertions:

```js
expect($box.css('height')).to.equal('10px');
```

Rinse and repeat until your CSS is super genki!


Stay 元気 everyone ❤️!
