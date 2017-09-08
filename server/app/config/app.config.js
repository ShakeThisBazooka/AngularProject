const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('../../config');
const MongoStore = require('connect-mongo')(session);
const jwt = require('jsonwebtoken');



const attachTo = (app) => {
  app.use(require('./cross-domain'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded( { extended: true } ));

  app.set('SuperSecret','megaSecret');

  //app.use(cookieParser('keyboard cat'));
  // app.use(session({
  //   store: new MongoStore({ url: config.connectionString }),
  //   saveUninitialized: true,
  //   resave: false,
  //   secret: 'secret',
  //   maxAge: 60000,
  // }));
};

module.exports = { attachTo };
