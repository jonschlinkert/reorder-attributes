# reorder-attributes [![NPM version](https://badge.fury.io/js/reorder-attributes.svg)](http://badge.fury.io/js/reorder-attributes)

> Re-format attributes in HTML tags to flow in a specific order. If you always prefer `class` before `id` or whatever, this module does that.

## Install
#### Install with [npm](npmjs.org):

```bash
npm i reorder-attributes --save-dev
```

## Run tests

```bash
npm test
```

## Usage

Pass a string of HTML to `reorderAttr()`:

```js
var reorderAttr = require('strip-attributes');
var str = '<h1 id="a" class="b">Foo</h1>';

// Re-order so `class` is before `id`
reorderAttr(str, ['class']);
//=> '<h1 class="b" id="a">Foo</h1>'
```

Create an array of attributes to order all of your attributes:

```js
var attr = ['id', 'class', 'name', 'href', 'rel', ...];
// only the attributes that actually exist will be re-ordered.
reorderAttr(str, attr);
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue][issues].

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 16, 2014._

[issues]: https://github.com/jonschlinkert/strip-attributes/issues