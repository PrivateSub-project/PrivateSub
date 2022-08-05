const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = process.env.ACCESS_KEY;

const strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);

  if (jwt_payload) {
    next(null, { _id: jwt_payload._id, username: jwt_payload.username });
  } else {
    next(null, false);
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      message: `Credentials missing`,
    });
  }
  jwt.verify(token, process.env.ACCESS_KEY, (error, user) => {
    if (error) {
      return res.status(403).json({
        message: `Access denied`,
      });
    }
    req.user = user;
    console.log(user);
    next();
  });
}

module.exports = { strategy, jwtOptions, jwt, authenticateToken };
