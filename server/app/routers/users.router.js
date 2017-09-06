const passport = require('passport');


//passport.authenticate('jwt') for all private routes between routes and controller

const attachTo = (app, {usersController}) => {
  //app.get('/api/users', usersController.getAllUsers);
  //app.post('/api/users', usersController.createUser);
  //app.get('/api/users/:id', usersController.getUserById);
  //app.post('/api/authenticate', usersController.authenticate);
  app.post('/api/login', usersController.authenticate);
  app.post('/api/register', usersController.createUser);
  app.get('/api/logout', usersController.logoutUser);

};
module.exports = {attachTo};
