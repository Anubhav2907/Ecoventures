const express = require("express");
const venderRouter = express.Router();
const passport = require("passport");

const {
  getsignup,
  register,
  home,
  login,
  logout,
  google,
  googleCallback,
  facebook,
  facebookCallback,
} = require("../controller/vendor");

venderRouter.get("/signup", getsignup);
venderRouter.post("/register", register);
venderRouter.get("/home", home);
venderRouter.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/signup",
  }),
  login
);
venderRouter.post("/logout", logout);
venderRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] }),
  google
);
venderRouter.get("/google/callback", passport.authenticate("google", { failureRedirect: "/signup" }), googleCallback);
venderRouter.get(
  "/facebook",
  passport.authenticate("facebook"),
  facebook
);
venderRouter.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/signup" }), facebookCallback);
module.exports = venderRouter;
