var ASSERT = require('assert');
var EXPRESS = require('express');
var EXPRESSBEM = require('express-bem');
var EXPRESSBEMTHML = require('..');

describe('basic renders', function () {
    var bemOpts = {
        root: 'test/data/views',
        path: 'pages'
    };
    var bemjson = {
        block: 'b-page',
        title: 'Example',
        content: 'Hey ho let\'s go!'
    };

    it('should generate html page with bemhtml', function (done) {
        var app = EXPRESS();
        var bem = EXPRESSBEM(bemOpts).bindTo(app);
        bem.usePlugin(EXPRESSBEMTHML, {source: '_?.bemhtml.js'});

        app.render('custom', {bemjson: bemjson}, function (err, html) {
            ASSERT.notEqual(html.indexOf('<!DOCTYPE'), -1);
            ASSERT.notEqual(html.indexOf(bemjson.content), -1);
            done();
        });
    });

});
