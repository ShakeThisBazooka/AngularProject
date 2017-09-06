const applicantController = (data) => {
    return {
        getById(req, res) {
            const userId = req.params.id;
            console.log(userId);

            return data.applicants.getByUserId(userId).then((applicant) => {
                return res.send({success: true, applicant});
            });
        },

        updateApplicant(req, res) {
            const userId = req.params.id;

            const foundApplicant = data.applicants.getByUserId(userId).then((appl) => {
                if(appl === undefined){
                    return Promise.reject('no applicant');
                }

                return data.applicants.updateApplicant(userId);
            });
        },

        createApplicant(req, res) {
            const applicant = req.body;
            console.log(applicant);

            return data.applicants.create(req.body)
            .then((newApplicant) => {
              return res.send({success: true, newApplicant});
            })
            .catch((err) => {
              return res.status(400).json({errorMsg: err})
            });
        }
    };
  };
  
  module.exports = applicantController;