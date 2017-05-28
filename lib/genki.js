const assign = require('lodash.assign');
const barista = require('seed-barista');
const jQuery = require('jquery');
const JSDOM = require('jsdom').JSDOM;

const Genki = function(options) {
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
  this.window = new JSDOM('<html><head></head><body></body></html>').window;
  this.document = this.window.document;
  this.$ = this.jQuery = jQuery(this.window);
  this.addStyle(options);

  return this;
};

Genki.prototype.addStyle = function(options) {
  this.options = assign(this.options, options);
  const styles = barista(this.options);
  if (styles) {
    const head = this.document.getElementsByTagName('head')[0];
    const s = this.document.createElement('style');
    s.innerHTML = styles.css;
    head.appendChild(s);
    this.styles.push(styles);
  }
  return this;
};

const start = function(options) {
  return new Genki(options);
};

module.exports = {
  start: start,
};
