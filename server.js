const config = require('./server/config');

Promise.resolve()
  .then(() => require('./server/db').init(config.connectionString))
  .then((db) => require('./server/data').init(db))
  .then((data) => require('./server/app').init(data))
  .then((app) => {
    app.listen(config.port, () => {
      console.log('Server is running at port 3000 ...');
    });
  });
