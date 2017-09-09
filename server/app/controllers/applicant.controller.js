const applicantController = (data) => {
  return {
    getById(req, res) {
      const userId = req.params.id;

      return data.applicants.getByUserId(userId).then((applicant) => {
        return res.send(applicant);
      });
    },

    updateApplicant(req, res) {
      const userId = req.params.id;
      const applicantToUpdate = req.body;
      applicantToUpdate.userId = userId;

      applicantToUpdate.jobs.forEach((job) => {
        data.jobs.updateJob(job);
      });

      return data.applicants.getByUserId(userId).then((appl) => {
        if (appl === undefined) {
          return Promise.reject('no applicant');
        }

        return data.applicants.updateCurrentApplicant(applicantToUpdate)
          .then((applicant) => {
            return res.send(applicant);
          })
          .catch((err) => {
            return res.status(400).json({errorMsg: err});
          })
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
      const userId = req.params.id;

      data.applicants.getByUserId(userId)
        .then((appl) => {
          appl.jobs.forEach((job) => {
            data.jobs.deleteApplicant(job, applicant);
          });
        });

      return data.applicants.deleteCurrentApplicant(userId)
        .then(() => {
          return res.status(200).json({success: true});
        })
        .catch((err) => {
          return res.status(400).json({errorMsg: err});
        });
    },

    getJobs(req, res) {
      const userId = req.params.id;

      return data.applicants.getJobsOfApplicant(userId)
        .then((jobs) => {
          return res.status(200).json({success: true, jobs});
        })
        .catch((err) => {
          return res.status(400).json({errorMsg: err});
        });
    },

    addJobToApplicant(req, res) {
      const userId = req.params.aid;
      const jobId = req.params.jid;

      return data.applicants.getByUserId(userId)
        .then((appl) => {
          return data.jobs.addPassedApplicantToJob(jobId, appl)
            .then(() => {
              return data.jobs.getById(jobId)
                .then((job) => {
                  return data.applicants.addPassedJobToApplicant(userId, job)
                    .then(() => {
                      return res.status(200).json({success: true, message: 'job added'});
                    })
                    .catch((err) => {
                      return res.status(400).json({errorMsg: err});
                    });
                });
            });
        })
    }
  };
};

module.exports = applicantController;
