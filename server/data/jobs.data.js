const ObjectId = require('mongodb').ObjectID;

const BaseData = require('./base/base.data');
const Job = require('./models/job.model');

class JobsData extends BaseData {
  constructor(db) {
    super(db, Job, Job);
  }

  create(job) {
    if (!this._isModelValid(job)) {
      return Promise.reject('Invalid job');
    }
    return this.collection.findOne({
      name: job.name,
    }).then((jobExist) => {
      if (jobExist) {
        return Promise.reject('Jobs already taken!');
      }
      return this.collection.insert(job);
    }).then(() => {
      return this.ModelClass.toViewModel(job);
    });
  }

  delete(job) {
    return this.collection.findOne({
      id: job.id,
    })
      .then((id) => {
        this.collection.deleteOne(id);
      });
  }

  addPassedApplicantToJob(jobId, applicant) {
    return this.collection.getById(jobId)
    .then((job) => {
      if(job.applicants === undefined) {
        job.applicants = [];
      }

      job.applicants.push(applicant);
      return job.applicants;
    });
  }

}

module.exports = JobsData;
