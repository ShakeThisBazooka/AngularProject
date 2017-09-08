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

  updateJob(job) {
    if (!this._isModelValid(job)) {
      return Promise.reject('Invalid job');
    }
    if(job === undefined){
        return Promise.reject('Undefined job');
    }

    return this.collection.findOne({ _id: ObjectId(job._id) })
      .then(() => {
        return this.collection.updateOne({ _id: job._id },
        { $set:
          {
            'title': job.title,
            'description': job.description,
            'companyInfo': job.companyInfo,
            'requirements': job.requirements,
            'benefits': job.benefits,
            'location': job.location,
            'category': job.category,
            'engagement': job.engagement,
            'applicants': job.applicants
          }
        }, { upsert: true });
    }).then(() => {
      return this.ModelClass.toViewModel(job)
    });
  }

  findByParams(query) {
    console.log(query);
    return this.collection.find(query).toArray()
      .then((result) => {
        return result;
      });
  }

  delete(jobId) {
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
