const BaseModel = require('./base/base.model');
const constants = require('../utils/globalConstants');

class User extends BaseModel {
  static isValid(model) {
    return !!(typeof model.name !== 'undefined'
      && typeof model.name === 'string'
      && model.password.match(constants.USER_PASSWORD_MATCH_PATTERN)
      && model.name.match(constants.USERNAME_MATCH_PATTERN)
      && model.email.match(constants.USER_EMAIL_MATCH_PATTERN));
  }
}

module.exports = User;
