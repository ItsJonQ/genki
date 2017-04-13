'use strict';

var jQuery = require('jquery');
var jsdom = require('jsdom').jsdom;

var Genki = function() {
  this.window;
  this.document;
  this.jQuery;
  this.$;
};

Genki.prototype.start = function(options) {
  this.window = jsdom('<html><body></body></html>').defaultView;
  this.document = this.window.document;
  this.$ = this.jQuery = jQuery(this.window);

  return this;
};

module.exports = new Genki();
