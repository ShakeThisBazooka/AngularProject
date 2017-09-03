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
        let user = req.body;
        if (user === undefined) {
          return res.status(401).json({errorMessage: "user is not authentificated"})
        } else {
          data.users.validateIfUserExist(user)
            .then((user) => {
              const jwtObject = {
                _id: user._id,
                username: user.username,
              };
              const token = jwt.sign(jwtObject, 'SuperSecret', {
                expiresIn: 1440,
              });
              return res.send({success: true, message: 'login success!', token,});
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
      }
      ,

      logoutUser(req, res)
      {
        req.session.destroy();
        return res
          .status(200)
          .json({infoMsg: 'You are logged out!'})
      }
      ,
    };
  }
;

module.exports = usersController;
