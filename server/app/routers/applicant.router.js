const passport = require('passport');

//passport.authenticate('jwt')


const attachTo = (app, {applicantController}) => {
    app.get('/api/applicant/:id', ensureToken, applicantController.getById);
    app.get('/api/applicant/:id/jobs', ensureTokenm, applicantController.getJobs);
    app.post('/api/applicant',ensureToken, applicantController.createApplicant);
    app.post('api/applicant/:aid/apply/:jid', ensureToken, applicantController.addJobToApplicant);
    app.put('/api/applicant/:id', ensureToken, applicantController.updateApplicant);
    app.delete('/api/applicant/:id', ensureToken, applicantController.deleteApplicant);
  };

function ensureToken(req,res,next) {
  if(req.headers["token"]) {
    const token = req.headers["token"];
    req.token = token;
    next();
  } else {
    res.status(400).json({success: false, error: "Access is denied. User is not authorized."});
  }
}

  module.exports = {attachTo};
