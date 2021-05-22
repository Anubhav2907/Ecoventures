const passport = require("passport");
const express = require("express");
const app = express();
const User = require("../model/vendor");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
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
  new GoogleStrategy(
    {
      clientID:
        "449888918750-7oljqj7f755kjakpnrfhligf6ih0rsu9.apps.googleusercontent.com",
      clientSecret: "C_cRdDzR7qyC5HsxD-Sgh6tt",
      callbackURL: "http://localhost:5000/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      /*
         use the profile info (mainly profile id) to check if the user is registerd in ur db
         If yes select the user and pass him to the done callback
         If not create the user and then select him and pass to callback
        */
      User.findOne({ google: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log('already registered')
        } else {
          new User({
            username: profile.displayName,
            google: profile.id,
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
