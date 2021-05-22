const passport = require("passport");
const express = require("express");
const app = express();
const User = require("../model/vendor");
const FacebookStrategy = require("passport-facebook").Strategy;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(
  new FacebookStrategy(
    {
      clientID: "212175777136726",
      clientSecret: "ce7d3486dcf926ee7f05f2207330ef81",
      callbackURL: "http://localhost:5000/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      /*
           use the profile info (mainly profile id) to check if the user is registerd in ur db
           If yes select the user and pass him to the done callback
           If not create the user and then select him and pass to callback
          */
      User.findOne({ facebook: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("already registered");
        } else {
          new User({
            username: profile.displayName,
            facebook: profile.id,
          })
            .save()
            .then((newuser) => {
              console.log("user registered", newuser);
            });
        }
      });

      return done(null, profile);
    }
  )
);
