/*!
 * reorder-attributes <https://github.com/jonschlinkert/reorder-attributes>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var cheerio = require('cheerio');
var pick = require('object.pick');
var uniq = require('array-uniq');

module.exports = function (str, attrs) {
  var $ = cheerio.load(str);

  $('*').each(function() {
    var keys = Object.keys(this.attribs);
    this.attribs = pick(this.attribs, uniq(attrs.concat(keys)));
  });

  return $.html();
};