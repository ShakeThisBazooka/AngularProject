const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const attachTo = (app, users) => {
  app.use(passport.initialize());
  app.use(passport.session());

  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromHeader('Authorization');
  opts.secretOrKey = 'SuperSecret';

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    users.findById(jwt_payload._id)
      .then((user) => {
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      })
      .catch((err) => {
        done(err, false);
      });
  }));

  passport.serializeUser((user, done) => {
    if (user) {
      return done(null, user._id);
    }

    return done(null, null);
  });

  passport.deserializeUser((id, done) => {
    users
      .findById(id)
      .then(user => {
        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      })
      .catch(err => {
        done(err, false);
      });
  });
};

module.exports = attachTo;
