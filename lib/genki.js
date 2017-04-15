'use strict';

var assign = require('lodash.assign');
var barista = require('seed-barista');
var jQuery = require('jquery');
var jsdom = require('jsdom').jsdom;

var Genki = function(options) {
  this.window = false;
  this.document = false;
  this.jQuery = false;
  this.$ = false;
  this.styles = [];
  this.options = {
    src: '/',
    enableCSSOM: false,
  };

  this.generate(options);
  return this;
};

Genki.prototype.generate = function(options) {
  this.window = jsdom('<html><head></head><body></body></html>').defaultView;
  this.document = this.window.document;
  this.$ = this.jQuery = jQuery(this.window);
  this.addStyle(options);
  return this;
};

Genki.prototype.addStyle = function(options) {
  this.options = assign(this.options, options);
  var styles = barista(this.options);
  if (styles) {
    var head = this.document.getElementsByTagName('head')[0];
    var s = this.document.createElement('style');
    s.innerHTML = styles.css;
    head.appendChild(s);
    this.styles.push(styles);
  }
  return this;
};

var start = function(options) {
  return new Genki(options);
};

module.exports = {
  start: start,
};
