module.exports = (app) => {
  app.route('/users')
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);

  app.route('/users/:id')
    .get(app.routes.users.findById);

  app.route('/accounts')
    .get(app.routes.accounts.findAll)
    .post(app.routes.accounts.create);

  app.route('/accounts/:id')
    .put(app.routes.accounts.update)
    .get(app.routes.accounts.findById);
};
