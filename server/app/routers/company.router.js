const passport = require('passport');

//passport.authenticate('jwt')

const attachTo = (app, {companyController}) => {
    app.get('/api/company/:id', ensureToken, companyController.getById);
    app.get('/api/company/:id/jobs', ensureToken, companyController.getJobs);
    app.post('/api/company', ensureToken, companyController.createCompany);
    app.post('/api/company/:id/jobs', ensureToken, companyController.addJob);
    app.put('/api/company/:cid/jobs/:jid', ensureToken, companyController.updateJob,);
    app.put('/api/company/:id', ensureToken, companyController.updateCompany);
    app.put('/api/company/:cid/jobs/:jid', ensureToken, companyController.updateJob);
    app.delete('/api/company/:id', companyController.deleteCompany);
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
