
const homeRoute = require('./home')
function route(app) {

    app.use('/', homeRoute)
    app.use(function(req, res, next) {
        const err = new Error('Not Found');
        res.status(404).send('Service Not Found 404');
        err.status = 404;
        next(err);
    });
}

module.exports = route