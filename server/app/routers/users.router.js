const attachTo = (app, { usersController }) => {
  app.get('/api/users', usersController.getAllUsers);
  app.post('/api/users', usersController.createUser);
  app.get('/api/users/:id', usersController.getUserById);
  app.post('/api/authenticate', usersController.authenticate);
  app.get('/api/logout', usersController.logoutUser);
};

module.exports = { attachTo };
