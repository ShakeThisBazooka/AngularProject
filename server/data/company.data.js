const ObjectId = require('mongodb').ObjectID;

const BaseData = require('./base/base.data');
const Company = require('./models/company.model');

class CompaniesData extends BaseData {
  constructor(db) {
    super(db, Company, Company);
  }

  create(company) {
    if (!this._isModelValid(company)) {
      return Promise.reject('Invalid company');
    }
    return this.collection.findOne({
      userId: company.userId,
    }).then((companyExist) => {
      if (companyExist) {
        return Promise.reject('Company already taken!');
      }

      company.jobs = [];
      return this.collection.insert(company);
    }).then(() => {
      return this.ModelClass.toViewModel(company);
    });
  }

  getByUserId(id) {
    return this.collection.findOne({ userId: id });
  }

  updateCurrentCompany(company) {
    if (!this._isModelValid(company)) {
      return Promise.reject('Invalid company');
    }
    if(company === undefined){
        return Promise.reject('Undefined company');
    }
    return this.collection.findOne({
      userId: company.userId,
    }).then((comp) => {
        return this.collection.updateOne({ userId: company.userId }, 
        { $set: 
          { 
            'name': company.name, 
            'vat': company.vat, 
            'field': company.field
          }
        }, { upsert: true });
    }).then(() => {
      return this.ModelClass.toViewModel(company)
    });
  }

  deleteCurrentCompany(id) {
    return this.collection.findOne({
      userId: id,
    })
     .then((company) => {
       return this.collection.remove(company);
     });
  }

  getJobsOfCompany(id) {
    return this.collection.findOne({
      userId: id
    })
     .then((company) => {
       return company.jobs;
     }); 
  }

  addJobToCompany(id, job) {
    return this.getByUserId(id)
    .then((company) => {
      return this.collection.update({
        userId: company.userId
      }, {$addToSet: {jobs: job }})
    })
    .then(() => {
      return this.getByUserId(id)
        .then((comp) => {
          return this.ModelClass.toViewModel(comp);
        });
    })
  }

  updateJobsOfCompany(userId, jobToUpdate) {
    console.log(jobToUpdate);
        return this.collection.update(
          { _id: userId, jobs: { $elemMatch: { companyId: jobToUpdate.companyId } } },
          { $set: {
            'jobs.$.title': jobToUpdate.title, 
            'jobs.$.description': jobToUpdate.description, 
            'jobs.$.companyInfo': jobToUpdate.companyInfo,
            'jobs.$.requirements': jobToUpdate.requirements,
            'jobs.$.benefits': jobToUpdate.benefits,
            'jobs.$.location': jobToUpdate.location,
            'jobs.$.category': jobToUpdate.category,
            'jobs.$.engagement': jobToUpdate.engagement
          }}
        ).then((res) => {
          return res;
        });
  }
}

module.exports = CompaniesData;