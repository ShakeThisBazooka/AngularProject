const UsersData = require('./users.data');
const ApplicantsData = require('./applicant.data');
const JobsData = require('./jobs.data');
const CompaniesData = require('./company.data');

const init = (db) => {
  return Promise.resolve({
    users: new UsersData(db),
    applicants: new ApplicantsData(db),
    jobs: new JobsData(db),
    companies: new CompaniesData(db)
  });
};

module.exports = { init };
