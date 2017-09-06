const passport = require('passport');
const jwt = require('jsonwebtoken');

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
        return res.status(400).json({errorMessage: 'You are already logged in!'})
      }

      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        info: req.body.info,
        role: req.body.role
      };


      return data.users.create(user)
        .then((newuser) => {
          let user = {
            userId: newuser.ops[0]._id,
            role: newuser.ops[0].role
          }
          return res.send({success: true, user});
        })
        .catch((err) => {
          return res.status(400).json({errorMsg: err})
        });
    },

    authenticate(req, res, next) {
      let user = req.body;
      console.log(user);
      if (user === undefined) {
        return res.status(401).json({errorMessage: "user is not authentificated"})
      }
      else {
        console.log('else')
        data.users.validateIfUserExist(user)
          .then((user) => {
            const jwtObject = {
              _id: user._id,
              email: user.email,
            };

            const token = jwt.sign(jwtObject, 'SuperSecret', {
              expiresIn: 1440,
            });

            user.token = token;
            return res.send({success: true, message: 'login success!', user});
          })
          .catch((error) => {
            res.send({errorMsg: error})
          })
      }
    },

    getUserById(req, res)
    {
      if (!req.user) {
        return res.status(401).json({err: 'You are not logged in!'})
      }
      const id = req.params.id;
      return data.users.getById(id)
        .then((user) => {
          return res.status(200).json(user);
        });
    },

    logoutUser(req, res)
    {
      req.session.destroy();
      return res
        .status(200)
        .json({infoMsg: 'You are logged out!'})
    },
  };
};

module.exports = usersController;
