const BaseModel = require('../../models/base/base.model');

class Applicant extends BaseModel {
  static isValid(applicant) {

    if (typeof applicant === 'undefined') {
      return Promise.reject('Applicant is undefined!');
    }

    if (typeof applicant.userId !== 'string') {
      return Promise.reject('Applicant userId must be a non-empty string');
    }

    if (typeof applicant.firstName !== 'string') {
      return Promise.reject('firstName must be a non-empty string');
    }

    if (typeof applicant.lastName !== 'string') {
      return Promise.reject('lastName must be a non-empty string');
    }
    
    return Promise.resolve(applicant);
  }
}

module.exports = Applicant;
