const attachTo = (app, {homeController}) => {
  app.get('/api/home', homeController.getHomeInfo);
};

module.exports = {attachTo};
