const ObjectId = require('mongodb').ObjectID;

const BaseData = require('./base/base.data');
const Applicant = require('./models/applicant.model');

class ApplicantData extends BaseData {
  constructor(db) {
    super(db, Applicant, Applicant);
  }

  create(applicant) {
    if (!this._isModelValid(applicant)) {
      return Promise.reject('Invalid applicant');
    }
    if(applicant === undefined){
        console.log(applicant);
        return Promise.reject('Undefined applicant');
    }
    return this.collection.findOne({
      userId: applicant.userId,
    }).then((applicantExist) => {
      if (applicantExist) {
        return Promise.reject('Applicant exists !');
      }
      return this.collection.insert(applicant);
    }).then(() => {
      return this.ModelClass.toViewModel(applicant);
    });
  }

  updateCurrentApplicant(applicant) {
    if (!this._isModelValid(applicant)) {
      return Promise.reject('Invalid applicant');
    }
    if(applicant === undefined){
        console.log(applicant);
        return Promise.reject('Undefined applicant');
    }
    return this.collection.findOne({
      userId: applicant.userId,
    }).then((appl) => {
        return this.collection.updateOne({ userId: applicant.userId }, 
        { $set: 
          { 
            'jobs': applicant.jobs, 
            'firstName': applicant.firstName, 
            'lastName': applicant.lastName
          }
        }, { upsert: true });
    }).then(() => {
      return this.ModelClass.toViewModel(applicant)
    });
  }

  getByUserId(id) {
    return this.collection.findOne({ userId: id });
  }

  deleteCurrentApplicant(id) {
    return this.collection.getById(id)
     .then((applicant) => {
       return this.collection.remove(applicant);
     });
  }

  getJobsOfApplicant(id) {
    return this.collection.getById(id)
     .then((applicant) => {
       if(applicant.jobs === undefined){
         applicant.jobs = [];
       }

       return applicant.jobs;
     }); 
  }

  addPassedJobToApplicant(appId, job) {
    return this.collection.getById(appId)
     .then((applicant) => {
       if(applicant.jobs === undefined) {
         applicant.jobs = [];
       }

       applicant.jobs.push(job);
       return applicant.jobs;
     });
  }
}

module.exports = ApplicantData;
