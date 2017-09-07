const BaseModel = require('../../models/base/base.model');
class Job extends BaseModel {
  static isValid(job) {

    if (typeof job === undefined) {
      return Promise.reject('Job is undefined!');
    }

    if (typeof job.title !== 'string' || job.title.trim() === '') {
      return Promise.reject('Job title must be a non-empty string');
    }

    if (typeof job.description !== 'string' || job.description.trim() === '') {
      return Promise.reject('Job description must be a non-empty string');
    }

    if (typeof job.companyInfo !== 'string' || job.companyInfo.trim() === '') {
      return Promise.reject('Job CompanyInfo must be a non-empty string');
    }

    if (typeof job.requirements !== 'string' || job.requirements.trim() === '') {
      return Promise.reject('Job Requirements must be a non-empty string');
    }

    if (typeof job.benefits !== 'string' || job.benefits.trim() === '') {
      return Promise.reject('Job Benefits must be a non-empty string');
    }

    if (typeof job.engagement !== 'string' || job.engagement.trim() === '') {
      return Promise.reject('Job Engagement must be a non-empty string');
    }

    if (typeof job.location !== 'string' || job.location.trim() === '') {
      return Promise.reject('Job Location must be a non-empty string');
    }

    if (typeof job.category !== 'string' || job.category.trim() === '') {
      return Promise.reject('Job Category must be a non-empty string');
    }

    return Promise.resolve(job);
  }
}

module.exports = Job;
