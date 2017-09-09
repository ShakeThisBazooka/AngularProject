const attachTo = (app, {jobsController}) => {
  app.get('/api/jobs', jobsController.getJobs);
  app.get('/api/jobs/:id', jobsController.getJob);
};

module.exports = {attachTo};
