const UsersData = require('./users.data');
const ApplicantsData = require('./applicant.data');
const JobsData = require('./jobs.data');

const init = (db) => {
  return Promise.resolve({
    users: new UsersData(db),
    applicants: new ApplicantsData(db),
    jobs: new JobsData(db)
  });
};

module.exports = { init };
