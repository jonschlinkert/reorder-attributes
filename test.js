/*!
 * reorder-attributes <https://github.com/jonschlinkert/reorder-attributes>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var reorder = require('./');

describe('reorder attributes', function () {
  describe('options.reorder', function () {
    it('should put attributes in the specified order.', function () {
      var actual = reorder('<h1 id="a" class="b">Foo</h1>', ['class', 'id']);
      actual.should.equal('<h1 class="b" id="a">Foo</h1>');
    });

    it('should order specified attributes before non-specified attributes.', function () {
      var actual = reorder('<h1 id="a" class="b">Foo</h1>', ['class']);
      actual.should.equal('<h1 class="b" id="a">Foo</h1>');
    });

    it('should ignore non-existent attributes.', function () {
      var actual = reorder('<h1 id="a" class="b">Foo</h1>', ['class', 'foo', 'bar', 'baz']);
      actual.should.equal('<h1 class="b" id="a">Foo</h1>');
    });

    it('should ignore non-existent attributes.', function () {
      var actual = reorder('<h1 class="b" id="a">Foo</h1>', require('./attr'));
      actual.should.equal('<h1 id="a" class="b">Foo</h1>');
    });
  });
});

