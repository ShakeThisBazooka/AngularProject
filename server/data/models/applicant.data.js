const ObjectId = require('mongodb').ObjectID;

const BaseData = require('./base/base.data');
const Applicant = require('../models/applicant.model');

class ApplicantData extends BaseData {
  constructor(db) {
    super(db, Applicant);
  }

  create(applicant) {
    if (!this._isModelValid(applicant)) {
      return Promise.reject('Invalid applicant');
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
}

module.exports = ApplicantData;