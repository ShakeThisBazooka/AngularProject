const passport = require('passport');

//passport.authenticate('jwt')

const attachTo = (app, {companyController}) => {
    app.get('/api/company/:id', ensureToken, companyController.getById);
    app.get('/api/company/:id/jobs', ensureToken, companyController.getJobs);
    app.post('/api/company',ensureToken, companyController.createCompany);
    app.put('/api/company/:id', ensureToken, companyController.updateCompany);
    app.delete('/api/company/:id', ensureToken, companyController.deleteCompany);
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
