const attachTo = (app, {jobsController}) => {
  app.get('/api/jobs', jobsController.getJobs)
};
