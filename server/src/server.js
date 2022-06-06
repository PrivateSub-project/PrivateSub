const express = require('express');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const passport = require("passport");
const passportJWT = require("passport-jwt");
const dotenv = require("dotenv");

dotenv.config();

const userService = require("./user-service.js");

const app = express();

const HTTP_PORT = process.env.PORT || 8080;

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = `W$o47GwxOWSweMc1&Hn*pT$C8HBTmcLs`;

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);

    if (jwt_payload) {
        next(null, { _id: jwt_payload._id, 
            userName: jwt_payload.userName,
        }); 
    }   
    else {
        next(null, false);
    }
});

passport.use(strategy);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/register", (req, res) => { 
    userService.registerUser(req.body)
    .then((msg) =>{
        res.json({ message: msg });
    })
    .catch((msg) => {
        res.status(422).json({ message: msg });
    });
});

app.post("/login" , (req, res) => {
    userService.checkUser(req.body)
    .then((user) => {
        var payload = {
            _id: user._id, 
            userName: user.userName
        };
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ message: "Login successful", token: token });
    })
    .catch((msg) => {
        res.status(422).json({ message: msg });
    })
});

userService.connect()
.then(() => {
    app.listen(HTTP_PORT, () => { console.log("API listening on: " + HTTP_PORT) });
})
.catch((err) => {
    console.log("unable to start the server: " + err);
    process.exit();
});