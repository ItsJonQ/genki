'use strict';

var assign = require('lodash.assign');
var barista = require('seed-barista');
var jQuery = require('jquery');
var jsdom = require('jsdom').jsdom;

var Genki = function() {
  this.window;
  this.document;
  this.jQuery;
  this.$;
  this.options = {
    src: '/',
  };
};

Genki.prototype.generateStyles = function(options) {
  this.options = assign(this.options, options);
  var styles = barista(this.options);
  if (styles) {
    this.$('head').append('<style>'+styles.css+'</style>');
  }
  return this;
};

Genki.prototype.start = function(options) {
  this.window = jsdom('<html><head></head><body></body></html>').defaultView;
  this.document = this.window.document;
  this.$ = this.jQuery = jQuery(this.window);
  this.generateStyles(options);
  return this;
};

module.exports = new Genki();
