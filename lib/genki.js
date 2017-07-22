const assign = require('lodash.assign');
const barista = require('seed-barista');
const cheerio = require('cheerio');
const juice = require('juice');

const Genki = function(options) {
  this.window = false;
  this.document = false;
  this.jQuery = false;
  this.$ = false;
  this.styles = [];
  this.options = {
    enableCSSOM: false,
    src: '/',
  };
  this.generate(options);

  return this;
};

Genki.prototype.generate = function(options) {
  this.$ = cheerio.load('<html><body></body></html>');
  this.addStyle(options);

  return this;
};

Genki.prototype.addStyle = function(options) {
  this.options = assign(this.options, options);
  const styles = barista(this.options);
  let style = '';
  if (styles) {
    this.styles.push(styles);
    style = styles.css;
  }
  this.inlineStyles(style);
  return this;
};

Genki.prototype.inlineStyles = function(styles) {
  const s = styles ? `<style>${styles}</style>` : '';
  this.$('html').replaceWith(juice(s + this.$.html()));
  return this;
};

Genki.prototype.addHTML = function(markup) {
  this.$('body').append(markup);
  this.inlineStyles();
};

const start = function(options) {
  return new Genki(options);
};

module.exports = {
  start: start,
};
