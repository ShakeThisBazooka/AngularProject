const attachTo = (app, {jobsController}) => {
  app.get('/jobs', jobsController.getJobs);
  app.get('/jobs/:id', jobsController.getJob);
};

module.exports = {attachTo};
