const express = require('express');
const path = require('path');

const init = (data) => {
  const app = express();
  const controllers = require('./controllers')(data);

  app.use('/libs', express.static(path.join(__dirname, '../node_modules/')));
  app.use(express.static(path.join(__dirname, '../../dist/')));

  require('./config/app.config').attachTo(app);
  require('./config/auth.config')(app, data.users);
  console.log('tuka sum');
  require('./routers').attachTo(app, controllers);
  return app;
};

module.exports = { init };
