const BaseModel = require('../../models/base/base.model');
class Company extends BaseModel {
  static isValid(company) {

    if (typeof company === undefined) {
      return Promise.reject('Company is undefined!');
    }

    if (typeof company.name !== 'string' || company.name.trim() === '') {
      return Promise.reject('Company Name must be a non-empty string');
    }

    if (typeof company.vat !== 'string' || company.vat.trim() === '') {
      return Promise.reject('Company Vat must be a non-empty string');
    }

    if (typeof company.field !== 'string' || company.field.trim() === '') {
      return Promise.reject('Company field must be a non-empty string');
    }

    return Promise.resolve(company);
  }
}

module.exports = Company;