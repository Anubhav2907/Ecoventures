const express = require("express");
const app = express();
const path = require("path");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const Vendor = require("./model/vendor");
const localstrategy = require("passport-local");
const vendorRouter = require('./routes/vendor');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("./authSetup/google.js");
require("./authSetup/facebook.js");
const dburl =
  "mongodb+srv://anubhav:ecoventures@cluster0.a98lw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dburl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Database Connected");
});
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
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(Vendor.authenticate()));
passport.serializeUser(Vendor.serializeUser());
passport.deserializeUser(Vendor.deserializeUser());
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
app.use('/vendor', vendorRouter);

app.listen(5000, function () {
  console.log("On port 3000");
});
