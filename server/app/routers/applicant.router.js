const attachTo = (app, {applicantController}) => {
    app.get('/api/applicant/:id', passport.authenticate('jwt'), applicantController.getById);
    app.post('/api/applicant', passport.authenticate('jwt'), applicantController.createApplicant);

  };
  
  module.exports = {attachTo};