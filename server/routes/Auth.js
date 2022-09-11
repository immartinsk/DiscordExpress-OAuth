import express from "express";

import passport from "passport";
import {
  AuthenticateUser,
  checkAuthentication,
  LogoutUser,
} from "../controllers/AuthController";

const Router = express.Router();

Router.get("/", checkAuthentication, (req, res) => {
  const user = req.user;
  res.json(user);
});

Router.get("/discord", passport.authenticate("discord"), AuthenticateUser);

Router.get(
  "/discord/callback",
  passport.authenticate("discord", {
    failureRedirect: "http://localhost:8080",
    successRedirect: "http://localhost:8080/about",
  })
);

Router.get("/logout", LogoutUser);

module.exports = Router;
