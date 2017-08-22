const homeController = () => {
  return {
    getHomeInfo(req, res){
      console.log('tuk');
      return res.json({ info:'Home' });
    },
  };
};

module.exports = homeController;
