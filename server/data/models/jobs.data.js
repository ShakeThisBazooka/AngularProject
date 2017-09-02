const ObjectId = require('mongodb').ObjectID;

const BaseData = require('./base/base.data');
const Job = require('../models/job.model');

class JobsData extends BaseData {
  constructor(db) {
    super(db, Job);
  }

  create(job) {
    if (!this._isModelValid(job)) {
      return Promise.reject('Invalid job');
    }
    return this.collection.findOne({
      name: job.name,
    }).then((jobExist) => {
      if (jobExist) {
        return Promise.reject('Jobs already taken!');
      }
      return this.collection.insert(job);
    }).then(() => {
      return this.ModelClass.toViewModel(job);
    });
  }

  delete(job) {
    return this.collection.findOne({
      id: job.id,
    })
      .then((id) => {
        this.collection.deleteOne(id);
      });
  }

}

module.exports = JobsData;
