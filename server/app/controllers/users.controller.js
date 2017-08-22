const passport = require('passport');

const usersController = (data) => {
  return {
    getAllUsers(req, res) {
      return data.users.getAll()
        .then((users) => {
          return res.json(users)
        });
    },

    createUser(req, res) {
      if (req.user) {
        return res.status(400).json({ errorMessage: 'You are already logged in!' })
      }

      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        info: 'No profile info!'
      };

      return data.users.create(user)
        .then(() => {
          return res
            .status(201)
            .json({successMsg: 'You are successfully registered!'})
        })
        .catch((err) => {
          return res.status(400).json({errorMsg: err})
        });
    },

    authenticate(req, res, next) {
      if (req.user) {
        return res.status(400).json({ errorMessage: 'You are already logged in!' })
      }
      return passport.authenticate('local', (err, user) => {
        if (err) {
          return res.status(400).json({ errorMessage: err })
        }
        req.login(user, (error) => {
          if (error) {
            return res.status(400).json({ errorMessage: error })
          }
          return res
            .status(200)
            .json({
              name: req.user.name,
              id: req.user._id,
              msg: 'You are logged in!'
            });
        });
        return next();
      })(req, res, next);
    },

    getUserById(req, res) {
      if (!req.user) {
        return res.status(401).json({err: 'You are not logged in!'})
      }
      const id = req.params.id;
      return data.users.getById(id)
        .then((user) => {
          return res.status(200).json(user);
        });
    },

    logoutUser(req, res) {
      req.session.destroy();
      return res
        .status(200)
        .json({infoMsg: 'You are logged out!'})
    },
  };
};

module.exports = usersController;
