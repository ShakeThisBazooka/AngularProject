const ObjectId = require('mongodb').ObjectID;
const CryptoJS = require('crypto-js');

const BaseData = require('./base/base.data');
const User = require('../models/user.model');

class UsersData extends BaseData {
  constructor(db) {
    super(db, User, User);
  }

  create(user) {
    if (!this._isModelValid(user)) {
      return Promise.reject('Invalid user');
    }
    return this.collection.findOne({
      name: user.name,
    }).then((userExists) => {
      if (userExists) {
        return Promise.reject('Username already taken!');
      }
      user.password = CryptoJS.SHA1(user.password).toString();
      return this.collection.insert(user);
    }).then(() => {
      return this.ModelClass.toViewModel(user);
    });
  }

  checkPassword(user, password) {
    if (!user) {
      return Promise.reject('Invalid user');
    }

    if (user.password !== CryptoJS.SHA1(password).toString()) {
      return Promise.reject('Invalid password');
    }
    return Promise.resolve(user);
  }
}

module.exports = UsersData;
