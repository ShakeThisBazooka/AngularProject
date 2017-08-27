const homeController = () => {
  return {
    getHomeInfo(req, res){
      return res.json({ info:'Home' });
    },
  };
};

module.exports = homeController;
