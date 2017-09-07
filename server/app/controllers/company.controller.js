
const companyController = (data) => {
    return {
        getById(req, res) {
            const userId = req.params.id;

            return data.companies.getByUserId(userId).then((company) => {
                return res.send(company);
            });
        },

        updateCompany(req, res) {
            const userId = req.params.id;
            const companyToUpdate = req.body;

            const foundCompany = data.companies.getByUserId(userId).then((company) => {
                if(company === undefined){
                    return Promise.reject('no company');
                }

                return data.companies.updateCurrentCompany(companyToUpdate).then((comp) => {
                    return res.send(comp);
                });
            });
        },

        createCompany(req, res) {
            const company = req.body;

            return data.companies.create(req.body)
            .then((newCompany) => {
              return res.send(newCompany);
            })
            .catch((err) => {
              return res.status(400).json({errorMsg: err})
            });
        },

        deleteCompany(req, res) {
            const companyId = req.params.id;
            const company = data.companies.getById(companyId);

            company.jobs.forEach((job) => {
                job.applicants.forEach((applicant) => {
                    data.jobs.deleteApplicant(job, applicant);
                });
                data.jobs.delete(job);
            });

            return data.companies.deleteCurrentCompany(companyId)
             .then(() => {
                 return res.status(200).json({success: true});
             })
             .catch((err) => {
                 return res.status(400).json({errorMsg: err});
             });
        },

        getJobs(req, res) {
            const companyId = req.params.id;

            return data.companies.getJobsOfCompany(companyId)
             .then((jobs) => {
                 return res.status(200).json({jobs: jobs});
             })
             .catch((err) => {
                 return res.status(400).json({errorMsg: err});
             });
        },

        addJob(req, res) {
            const companyId = req.params.id;
            const job = req.body;

            return data.companies.addJobToCompany(companyId, job)
             .then((company) => {
                 return res.status(200).json(company);
             })
             .catch((err) => {
                 return res.status(400).json({errorMsg: err});
             });
        },

        updateJob(req, res) {
            const companyId = req.params.cid;
            const jobId = req.params.jid;
            const jobToUpdate = req.body;

            return data.companies.updateJobsOfCompany(companyId, jobId, jobToUpdate, data.jobs)
              .then((jobs) => {
                  return res.status(200).json({success: true, jobs});
              })
              .catch((err) => {
                  return res.status(400).json({errorMsg: err});
              });
        }
    };
  };

  module.exports = companyController;