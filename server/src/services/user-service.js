const bcrypt = require('bcrypt');
const UserModel = require('../models/user-model');
const logger = require('../logger');
const auth = require('../jwt');

exports.registerUser = async (req, res) => {
  try {
    if (req.body.password != req.body.password2) {
      res.status(400).json({
        message: `Passwords do not match`,
      });
    } else {
      if (UserModel.findOne({ username: req.body.username })) {
        res.status(400).json({
          message: `User already exists`,
        });
      } else {
        const newUser = new UserModel(req.body);
        newUser.password = await bcrypt.hash(req.body.password, 10);
        await newUser.save();
        res.status(200).json({
          message: `New customer has been registered`,
          data: newUser,
        });
      }
    }
  } catch (error) {
    logger.error(error);
    res.status(500).status(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const token = auth.jwt.sign(
          {
            _id: user._id,
            username: user.username,
          },
          auth.jwtOptions.secretOrKey,
          { expiresIn: '1800s' }
        );
        res.status(200).json({
          message: `User logged in`,
          user: user,
          token: token,
        });
      } else {
        res.status(401).json({
          message: `Incorrect password`,
        });
      }
    } else {
      res.status(401).json({
        message: `Incorrect username`,
      });
    }
  } catch (error) {
    logger.error(error);
    res.status(500).status(error);
  }
};
