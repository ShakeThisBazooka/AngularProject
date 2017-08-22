const { Strategy } = require('passport-local');
const passport = require('passport');

const attachTo = (app, usersData) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use('local', new Strategy(
    (username, password, done) => {
      return usersData.getByObjectName(username)
        .then((user) => usersData.checkPassword(user, password))
        .then((user) => done(null, user))
        .catch((error) => done(error));
    }
  ));

  passport.serializeUser((user, done) => {
    return done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    return usersData.getById(id)
      .then((user) => done(null, user))
      .catch((error) => done(error));
  });
};

module.exports = { attachTo };
