const UsersData = require('./users.data');

const init = (db) => {
  return Promise.resolve({
    users: new UsersData(db),
  });
};

module.exports = { init };
