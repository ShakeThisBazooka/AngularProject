const passport = require('passport');


const attachTo = (app, {applicantController}) => {
    app.get('/api/applicant/:id', ensureToken, applicantController.getById);
    app.post('/api/applicant', passport.authenticate('jwt'), applicantController.createApplicant);
    app.put('/api/applicant/:id', applicantController.updateApplicant);

  };

function ensureToken(req,res,next) {
  const bearerHeader = req.headers["token"];
  console.log(bearerHeader);
  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];
  req.token = bearerToken;
  next();
}

  module.exports = {attachTo};
