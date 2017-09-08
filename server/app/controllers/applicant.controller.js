const applicantController = (data) => {
    return {
        getById(req, res) {
            const userId = req.params.id;
            console.log("V applicants");

            console.log(data.applicants);

            return data.applicants.getByUserId(userId).then((applicant) => {
                console.log(applicant);
                return res.send(applicant);
            });
        },

        updateApplicant(req, res) {
            const userId = req.params.id;
            const applicantToUpdate = req.body;

            const foundApplicant = data.applicants.getByUserId(userId).then((appl) => {
                if(appl === undefined){
                    return Promise.reject('no applicant');
                }

                console.log(applicantToUpdate);

                return data.applicants.updateCurrentApplicant(applicantToUpdate).then((applicant) => {
                    return res.send(applicant);
                });
            });
        },

        createApplicant(req, res) {
            const applicant = req.body;

            return data.applicants.create(req.body)
            .then((newApplicant) => {
              return res.send(newApplicant);
            })
            .catch((err) => {
              return res.status(400).json({errorMsg: err})
            });
        },

        deleteApplicant(req, res) {
            const applicantId = req.params.id;

            const applicant = data.applicants.getById(applicantId);

            applicant.jobs.forEach((job) => {
                data.jobs.deleteApplicant(job, applicant);
            });

            return data.applicants.deleteCurrentApplicant(applicantId)
             .then(() => {
                 return res.status(200).json({success: true});
             })
             .catch((err) => {
                 return res.status(400).json({errorMsg: err});
             });
        },

        getJobs(req, res) {
            const applicantId = req.params.id;

            return data.applicants.getJobsOfApplicant(applicantId)
             .then((jobs) => {
                 return res.status(200).json({success: true, jobs});
             })
             .catch((err) => {
                 return res.status(400).json({errorMsg: err});
             });
        },

        addJobToApplicant(req, res) {
            const applicantId = req.params.aid;
            const jobId = req.params.jid;

            const applicant = data.applicants.getById(applicantId);
            const job = data.jobs.getById(jobId);

            return data.jobs.addPassedApplicantToJob(jobId, applicant)
              .then(() => {
                  return data.applicants.addPassedJobToApplicant(applicantId, job)
                    .then(() => {
                        return res.status(200).json({success: true, message: 'job added'});
                    })
                    .catch((err) => {
                        return res.status(400).json({errorMsg: err});
                    });
              });
        }
    };
  };

  module.exports = applicantController;
