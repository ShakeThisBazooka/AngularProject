const jobsController = (data) => {
  return {
    getJobs(req, res){
      if (req.query === null) {
        return data.jobs.getAll()
          .then((jobs) => {
            return res.json(jobs);
          })
      }
      else {
        data.jobs.findByParams(req.query)
          .then((filteredJobs) => {
            return res.send(filteredJobs);
          })
          .catch((err) => {
            return res.status(400).json({errorMsg: err});
          })
      }
    },

    getJob(req, res) {
      const jobId = req.params.id;

      return data.jobs.getById(jobId)
        .then((job) => {
          return res.send(job);
        })
        .catch((err) => {
          return res.status(400).json({errorMsg: err});
        })
    }
  }
}

module.exports = jobsController;
