const passport = require('passport');

//passport.authenticate('jwt')


const attachTo = (app, {applicantController}) => {
    app.get('/api/applicant/:id', ensureToken, applicantController.getById);
    app.post('/api/applicant',ensureToken, applicantController.createApplicant);
    app.put('/api/applicant/:id', ensureToken, applicantController.updateApplicant);

  };

function ensureToken(req,res,next) {
  if(req.headers["token"]) {
    const token = req.headers["token"];
    req.token = token;
    next();
  } else {
    console.log('You are not authorized....');
  }
}

  module.exports = {attachTo};
