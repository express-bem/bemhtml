var U = require('express-bem/lib/util');

module.exports = function (opts) {
    bemhtml.extension = '.bemhtml.js';
    return bemhtml;

    /**
     * bemhtml.js express view engine adapter
     * @api
     * @returns {function name: String, options: Object, cb: Function}
     */
    function bemhtml(name, options, cb) {
        // reject rendering for empty options.bemjson
        if (!options.bemjson) {
            cb(Error('Empty request'));
            return;
        }

        // create data object to pass to bemhtml
        var data = options;

        name = U.fulfillName(name, opts.ext || this.ext, opts.source);

        // pass to render
        U.exec({
            file: name,
            ctx: data.global || null,
            force: options.forceExec,
            forceLoad: options.forceLoad
        }, function (err, module) {
            if (err || !module || !module.BEMHTML || !module.BEMHTML.apply) {
                cb(err || Error('Unknown file format'));
                return;
            }

            // Renders bemjson to html via bemhtml
            cb(null, module.BEMHTML.apply(options.bemjson));
        });
    }
};
