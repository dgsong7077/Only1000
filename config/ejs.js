var path = require('path');

module.exports = function (app, rootPath) {
    app.set('views', path.join(rootPath, 'views'));
    app.set('view engine', 'ejs');
} 