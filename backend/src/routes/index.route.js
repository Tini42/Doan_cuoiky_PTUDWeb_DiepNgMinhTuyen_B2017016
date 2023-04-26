
const beveragesRouter = require('./beverage.route');
const siteRouter = require('./site.route');
const blogsRouter = require('./blog.route');
function route(app) {
    app.use('/admin/beverages', beveragesRouter);
    app.use('/beverages', beveragesRouter);
    app.use('/', siteRouter);
    app.use('/admin/blogs', blogsRouter);
}

module.exports = route;