const express = require("express");
const path = require("path");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const session = require("express-session");
const Vendor = require("./models/vendor");
const localstrategy = require("passport-local");
const flash = require("connect-flash");
const dburl = "mongodb+srv://anubhav:ecoventures@cluster0.a98lw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const FacebookStrategy = require("passport-facebook").Strategy;
const { isLoggedIn } = require("./middleware");
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
  secret: "mysecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionconfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
require("./passport-setup");
require("./facebook-setup");
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(Vendor.authenticate()));
passport.serializeUser(Vendor.serializeUser());
passport.deserializeUser(Vendor.deserializeUser());
app.use(function (req, res, next) {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/signup", function (req, res) {
  res.render("signup");
});
app.post("/register", async function (req, res) {
  try {
    const { email, username, password } = req.body;
    const user = new Vendor({ email, username },{ sparse: true });
    const registeredUser = await Vendor.register(user, password);
    req.login(registeredUser, function (err) {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome");
      res.redirect("/home");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
});
app.get("/home", isLoggedIn, function (req, res) {
  res.render("home");
});
app.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/signup",
  }),
  async function (req, res) {
    req.flash("success", "Welcome");
    res.redirect("/home");
  }
);
app.post("/logout", function (req, res) {
  req.logout();
  req.flash("success", "Logged out successfully");
  res.redirect("/signup");
});
app.get("/google", passport.authenticate("google", { scope: ["profile"] }));

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/signup" }),
  function (req, res) {
    req.flash("success", "Welcome");
    res.redirect("/home");
  }
);
app.get("/facebook", passport.authenticate("facebook"));

app.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/signup" }),
  function (req, res) {
    req.flash("success", "Welcome");
    res.redirect("/home");
  }
);
app.listen(3000, function () {
  console.log("On port 3000");
});
