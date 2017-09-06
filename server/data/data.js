const UsersData = require('./users.data');
const ApplicantsData = require('./models/applicant.data');

const init = (db) => {
  return Promise.resolve({
    users: new UsersData(db),
    applicants: new ApplicantsData(db)
  });
};

module.exports = { init };
