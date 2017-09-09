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
                if (company === undefined) {
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
                    return res.status(400).json({ errorMsg: err })
                });
        },

        deleteCompany(req, res) {
            const userId = req.params.id;
            data.companies.getByUserId(userId)
                .then((company) => {
                    company.jobs.forEach((job) => {
                        job.applicants.forEach((applicant) => {
                            data.jobs.deleteApplicant(job, applicant);
                        });
                        data.jobs.delete(job);
                    });
                });

            return data.companies.deleteCurrentCompany(userId)
                .then(() => {
                    return res.status(200).json({ success: true });
                })
                .catch((err) => {
                    return res.status(400).json({ errorMsg: err });
                });
        },

        getJobs(req, res) {
            const companyId = req.params.id;

            return data.companies.getJobsOfCompany(companyId)
                .then((jobs) => {
                    return res.status(200).json({ jobs: jobs });
                })
                .catch((err) => {
                    return res.status(400).json({ errorMsg: err });
                });
        },

        addJob(req, res) {
            const userId = req.params.id;
            const job = req.body;

            return data.jobs.create(job)
                .then((createdJob) => {
                    return data.companies.addJobToCompany(userId, createdJob)
                        .then((company) => {
                            return res.status(200).json(company);
                        })
                        .catch((err) => {
                            return res.status(400).json({ errorMsg: err });
                        });
                });
        },

        updateJob(req, res) {
            const userId = req.params.cid;
            const jobId = req.params.jid;
            const jobToUpdate = req.body;

            return data.jobs.getById(jobId)
                .then((job) => {
                    jobToUpdate._id = job._id;
                    return data.jobs.updateJob(jobToUpdate)
                })
                .then(() => {
                    return data.companies.updateJobsOfCompany(userId, jobToUpdate)
                })
                .then((jobs) => {
                    return res.status(200).json({ success: true, jobs });

                })
                .catch((err) => {
                    return res.status(400).json({ errorMsg: err });
                })
        },

        deleteJob(req, res) {
            const userId = req.params.cid;
            const jobId = req.params.jid;

            return data.jobs.delete(jobId)
                .then(() => {
                    return data.companies.deleteJobOfCompany(userId, jobId)
                        .then(() => {
                            return res.status(200).json({ success: true });
                        })
                        .catch((err) => {
                            return res.status(400).json({ errorMsg: err })
                        });
                });
        },

        deleteCompany(req, res) {
            const userId = req.params.id;
            data.companies.getByUserId(userId)
                .then((company) => {
                    company.jobs.forEach((job) => {
                        job.applicants.forEach((applicant) => {
                            data.jobs.deleteApplicant(job, applicant);
                        });
                        data.jobs.delete(job);
                    });
                });

            return data.companies.deleteCurrentCompany(userId)
                .then(() => {
                    return res.status(200).json({ success: true });
                })
                .catch((err) => {
                    return res.status(400).json({ errorMsg: err });
                });
        },

        getJobs(req, res) {
            const companyId = req.params.id;

            return data.companies.getJobsOfCompany(companyId)
                .then((jobs) => {
                    return res.status(200).json({ jobs: jobs });
                })
                .catch((err) => {
                    return res.status(400).json({ errorMsg: err });
                });
        },

        addJob(req, res) {
            const userId = req.params.id;
            const job = req.body;

            return data.jobs.create(job)
                .then((createdJob) => {
                    console.log(createdJob);
                    return data.companies.addJobToCompany(userId, createdJob)
                        .then((company) => {
                            return res.status(200).json(company);
                        })
                        .catch((err) => {
                            return res.status(400).json({ errorMsg: err });
                        });
                });
        },

        updateJob(req, res) {
            const userId = req.params.cid;
            const jobId = req.params.jid;
            const jobToUpdate = req.body;

            return data.jobs.getById(jobId)
                .then((job) => {
                    jobToUpdate._id = job._id;
                    return data.jobs.updateJob(jobToUpdate)
                        .then(() => {
                            return data.companies.updateJobsOfCompany(userId, jobToUpdate)
                                .then((jobs) => {
                                    return res.status(200).json({ success: true, jobs });
                                })
                                .catch((err) => {
                                    return res.status(400).json({ errorMsg: err });
                                });
                        });
                });
        },

        deleteJob(req, res) {
            const userId = req.params.cid;
            const jobId = req.params.jid;

            return data.jobs.delete(jobId)
                .then(() => {
                    return data.companies.deleteJobOfCompany(userId, jobId)
                        .then(() => {
                            return res.status(200).json({ success: true });
                        })
                        .catch((err) => {
                            return res.status(400).json({ errorMsg: err });
                        })
                });
        }

    }
}
module.exports = companyController;
