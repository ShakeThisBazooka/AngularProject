class BaseModel {
  static toViewModel(model) {
    const viewModel = new BaseModel();
    Object.keys(model)
      .forEach((prop) => {
        viewModel[prop] = model[prop];
      });
    return viewModel;
  }
}

module.exports = BaseModel;
