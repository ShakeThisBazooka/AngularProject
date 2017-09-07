const passport = require('passport');

//passport.authenticate('jwt')

const attachTo = (app, {companyController}) => {
    app.get('/api/company/:id', ensureToken, companyController.getById);
    app.get('/api/company/:id/jobs', ensureToken, companyController.getJobs);
<<<<<<< 4e68fd1b45f59e960ed5371adc6acbff3ef3eaa1
    app.post('/api/company', ensureToken, companyController.createCompany);
    app.post('/api/company/:id/jobs', ensureToken, companyController.addJob);
    app.put('/api/company/:cid/jobs/:jid', ensureToken, companyController.updateJob,);
=======
    app.post('/api/company', companyController.createCompany);
    app.post('/api/company/:id/jobs', companyController.addJob);
>>>>>>> Fixed addJob method in company controller.
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
