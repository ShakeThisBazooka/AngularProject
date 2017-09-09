const passport = require('passport');

//passport.authenticate('jwt')

const attachTo = (app, {companyController}) => {
    app.get('/api/company/:id', ensureToken, companyController.getById);
    app.get('/api/company/:id/jobs', ensureToken, companyController.getJobs);
    app.post('/api/company', /* commented for test purposes ensureToken,*/ companyController.createCompany);
    app.post('/api/company/:id/jobs', companyController.addJob);
    app.put('/api/company/:cid/jobs/:jid', companyController.updateJob,);
    app.put('/api/company/:id', ensureToken, companyController.updateCompany);
    app.delete('/api/company/:id', ensureToken, companyController.deleteCompany);
    app.delete('/api/company/:cid/jobs/:jid', companyController.deleteJob);
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
