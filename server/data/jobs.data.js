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

      job.applicants = [];
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

  deleteApplicant(job, applicant) {
    job.applicants.pop(applicant);
  }

  addPassedApplicantToJob(jobId, applicant) {
    return this.collection.getById(jobId)
    .then((job) => {
      job.applicants.push(applicant);
      return job.applicants;
    });
  }

  updateJob(job) {
    return this.collection.updateOne({ title: job.title }, 
      { $set: 
        { 
          'title': job.title, 
          'description': job.description, 
          'companyInfo': job.companyInfo,
          'requirements': job.requirements,
          'benefits': job.benefits,
          'engagement': job.engagement,
          'location': job.location,
          'job.category': job.category
        }
      }, { upsert: true });
  }

}

module.exports = JobsData;
