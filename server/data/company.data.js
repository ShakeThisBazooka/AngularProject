const ObjectId = require('mongodb').ObjectID;

const BaseData = require('./base/base.data');
const Company = require('./models/company.model');

class CompanyData extends BaseData {
  constructor(db) {
    super(db, Company, CompanyData);
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
    return this.collection.getById(id)
     .then((company) => {
       return this.collection.remove(company);
     });
  }

  getJobsOfCompany(id) {
    return this.collection.getById(id)
     .then((company) => {
       if(company.jobs === undefined){
         company.jobs = [];
       }

       return company.jobs;
     }); 
  }
}

module.exports = CompanyData;