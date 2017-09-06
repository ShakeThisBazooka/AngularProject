const applicantController = (data) => {
    return {
        getById(req, res) {
            const userId = req.params.id;
            console.log("V applicants");

            console.log(data.applicants);

            return data.applicants.getByUserId(userId).then((applicant) => {
                console.log(applicant);
                return res.send({success: true, applicant});
            });
        },

        updateApplicant(req, res) {
            const userId = req.params.id;

            const foundApplicant = data.applicants.getByUserId(userId).then((appl) => {
                if(appl === undefined){
                    return Promise.reject('no applicant');
                }

                return data.applicants.updateApplicant(userId).then((applicant) => {
                    return res.send({success: true, applicant});
                });
            });
        },

        createApplicant(req, res) {
            const applicant = req.body;

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
