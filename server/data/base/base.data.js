const { ObjectId } = require('mongodb');

class BaseData {
  constructor(db, ModelClass, validator) {
    this.db = db;
    this.ModelClass = ModelClass;
    this.validator = validator;
    this.collectionName = this._getCollectionName();
    this.collection = this.db.collection(this.collectionName);
  }

  getAll() {
    let result = this.collection
      .find()
      .toArray();

    if (this.ModelClass.toViewModel) {
      result = result.then((models) => {
        return models.map((model) =>
          this.ModelClass.toViewModel(model));
      });
    }
    return result;
  }

  create(model) {
    if (!this._isModelValid(model)) {
      return Promise.reject('Invalid models');
    }
    return this.collection.insert(model)
      .then(() => {
        return this.ModelClass.toViewModel(model);
      });
  }

  getById(id) {
    return this.collection.findOne({ _id: ObjectId(id) });
  }

  getBySpecificId(id){
    return this.collection.findOne({userId:id})
  }

  getByObjectName(objectName) {
    return this.collection.findOne({
      name: objectName.toString(),
    });
  }

  _isModelValid(model) {
    return this.validator.isValid(model);
  }

  _getCollectionName() {
    return this.ModelClass.name.toLowerCase() + 's';
  }
}

module.exports = BaseData;
