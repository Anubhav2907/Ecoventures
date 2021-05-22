const express = require("express");
const app = express();
app.use(require('cookie-parser')());
const passport = require("passport");
const Vendor = require("../model/vendor");
const bodyParser = require("body-parser");
const session = require("express-session");
const localstrategy = require("passport-local");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("../authSetup/google.js");
require("../authSetup/facebook.js");
const sessionconfig = {
  name: "session",
  secret: "abc",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionconfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(Vendor.authenticate()));
passport.serializeUser(Vendor.serializeUser());
passport.deserializeUser(Vendor.deserializeUser());
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
module.exports.getsignup = function (req, res) {
  res.send("signup page");
};
module.exports.register = async function (req, res) {
  try {
    const { email, username, password } = req.body;
    const user = new Vendor({ email, username });
    const registeredUser = await Vendor.register(user, password);
    req.login(registeredUser, function (err) {
      if (err) {
        return next(err);
      }
      res.send("registered successfully");
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports.home = function (req, res) {
  res.send("home");
};
module.exports.login = async function (req, res) {
  res.send("logged in");
};
module.exports.logout = function (req, res) {
  req.logout();
  res.send("logged out");
};
module.exports.google = passport.authenticate("google", { scope: ["profile"] });

module.exports.googleCallback = function (req, res) {
  res.redirect("/home");
};
module.exports.facebook = passport.authenticate("facebook");

module.exports.facebookCallback = function (req, res) {
  res.redirect("/home");
};
