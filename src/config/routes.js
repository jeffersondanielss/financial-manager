module.exports = (app) => {
  app.route('/auth/signin')
    .post(app.routes.auth.signin);

  app.route('/users')
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);

  app.route('/users/:id')
    .get(app.routes.users.findById);

  app.route('/accounts')
    .get(app.routes.accounts.findAll)
    .post(app.routes.accounts.create);

  app.route('/accounts/:id')
    .delete(app.routes.accounts.exclude)
    .put(app.routes.accounts.update)
    .get(app.routes.accounts.findById);
};
