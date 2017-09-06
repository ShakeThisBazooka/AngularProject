const passport = require('passport');

const attachTo = (app, {applicantController}) => {
    app.get('/api/applicant/:id', passport.authenticate('jwt'), applicantController.getById);
    app.post('/api/applicant', passport.authenticate('jwt'), applicantController.createApplicant);
    app.put('/api/applicant/:id', applicantController.updateApplicant);

  };
  
  module.exports = {attachTo};