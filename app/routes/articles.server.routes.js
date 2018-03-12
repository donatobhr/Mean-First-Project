const users = require('../../app/controllers/users.server.controller');
const articles = require('../../app/controllers/articles.server.controller');

module.exports = function(app){
    app.route('/api/articles')
        .get(articles.list)
        .post(users.requiresLogin,articles.create);

    app.route('/api/articles/:articleId')
        .get(articles.read)
        .put(users.requiresLogin, articles.hasAuthorizaton, articles.update)
        .delete(users.requiresLogin,articles.hasAuthorizaton,articles.delete);

    app.param('articleId',articles.articleByID);
};