const companyController = (data) => {
    return {
        getById(req, res) {
            const userId = req.params.id;

            return data.companys.getByUserId(userId).then((company) => {
                return res.send(company);
            });
        },

        updateCompany(req, res) {
            const userId = req.params.id;
            const companyToUpdate = req.body;

            const foundCompany = data.companys.getByUserId(userId).then((company) => {
                if(company === undefined){
                    return Promise.reject('no company');
                }

                return data.companys.updateCurrentCompany(companyToUpdate).then((comp) => {
                    return res.send(comp);
                });
            });
        },

        createCompany(req, res) {
            const company = req.body;

            return data.companys.create(req.body)
            .then((newCompany) => {
              return res.send(newCompany);
            })
            .catch((err) => {
              return res.status(400).json({errorMsg: err})
            });
        },

        deleteCompany(req, res) {
            const companyId = req.params.id;

            return data.companys.deleteCurrentCompany(companyId)
             .then(() => {
                 return res.status(200).json({success: true});
             })
             .catch((err) => {
                 return res.status(400).json({errorMsg: err});
             });
        },

        getJobs(req, res) {
            const companyId = req.params.id;

            return data.companys.getJobsOfCompany(companyId)
             .then((jobs) => {
                 return res.status(200).json({success: true, jobs});
             })
             .catch((err) => {
                 return res.status(400).json({errorMsg: err});
             });
        }
    };
  };

  module.exports = applicantController;