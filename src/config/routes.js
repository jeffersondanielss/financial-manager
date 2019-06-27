module.exports = (app) => {
  app.route('/users')
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);

  app.route('/users/:id')
    .get(app.routes.users.findById);
};
