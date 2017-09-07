const UsersData = require('./users.data');
const ApplicantsData = require('./applicant.data');
const JobsData = require('./jobs.data');
const CompanyData = require('./models/company.model');

const init = (db) => {
  return Promise.resolve({
    users: new UsersData(db),
    applicants: new ApplicantsData(db),
    jobs: new JobsData(db),
    companys: new CompanyData(db)
  });
};

module.exports = { init };
