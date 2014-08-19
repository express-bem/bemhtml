
# express-bem-bemhtml [![Build Status](https://travis-ci.org/zxqfox/express-bem-bemhtml.svg)](https://travis-ci.org/zxqfox/express-bem-bemhtml) [![Dependency Status](https://david-dm.org/zxqfox/express-bem-bemhtml.png)](https://david-dm.org/zxqfox/express-bem-bemhtml)

[bemhtml.js][] engine (plugin) for [express-bem][]

[bemhtml.js]: https://github.com/bem/bem-core
[express-bem]: https://github.com/zxqfox/express-bem

## Why

To use `.bemhtml.js` techs to render pages.

## Installation

```sh
$ npm i express-bem-bemhtml --save
```

## Usage

```js
var Express = require('express');
var ExpressBem = require('express-bem');

var app = Express();
var bem = ExpressBem({root: './path-to/bem-project'}).bindTo(app);

// simple
bem.usePlugin('express-bem-bemhtml');
```

## License

MIT [License][]

[License]: https://github.com/zxqfox/express-bem/blob/master/LICENSE
