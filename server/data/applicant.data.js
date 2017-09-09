const ObjectId = require('mongodb').ObjectID;

const BaseData = require('./base/base.data');
const Applicant = require('./models/applicant.model');

class ApplicantsData extends BaseData {
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

      applicant.jobs = [];
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
        return Promise.reject('Undefined applicant');
    }

    return this.collection.findOne({
      userId: applicant.userId,
    })
    .then((appl) => {
        return this.collection.updateOne({ userId: applicant.userId }, 
        { $set: 
          { 
            'userId': applicant.userId,
            'jobs': applicant.jobs, 
            'firstName': applicant.firstName, 
            'lastName': applicant.lastName
          }
        }, { upsert: true });
    })
    .then(() => {
      return this.ModelClass.toViewModel(applicant)
    });
  }

  getByUserId(id) {
    return this.collection.findOne({ userId: id });
  }

  deleteCurrentApplicant(id) {
    return this.getByUserId(id)
     .then((applicant) => {
       return this.collection.remove(applicant);
     });
  }

  getJobsOfApplicant(id) {
    return this.getByUserId(id)
     .then((applicant) => {
       return applicant.jobs;
     }); 
  }

  addPassedJobToApplicant(id, job) {
    return this.collection.update(
      {userId: id},
      { $addToSet: { jobs: job } }
    )
    .then((res) => {
      return res;
    })
  }
}

module.exports = ApplicantsData;
