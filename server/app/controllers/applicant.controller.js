const applicantController = () => {
    return {
        getById(req, res) {
            const id = req.body.id;

            return data.users.findById(id)
        },

        createApplicant(req, res) {
            const applicant = req.body.applicant;
            
            return data.applicants.create(applicant)
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