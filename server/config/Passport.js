import { Strategy, Scope } from "@oauth-everything/passport-discord";
import Passport from "passport";

module.exports = (passport) => {
  Passport.serializeUser((user, done) => {
    done(null, user);
  });

  Passport.deserializeUser((id, done) => {
    done(null, id);
  });

  Passport.use(
    new Strategy(
      {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: process.env.callbackURL,
        scope: [
          Scope.EMAIL,
          Scope.CONNECTIONS,
          Scope.GUILDS,
          Scope.MESSAGES_READ,
          Scope.IDENTIFY,
        ],
      },
      (accessToken, refreshToken, profile, cb) => {
        cb(null, { aToken: accessToken, rToken: refreshToken, profile });
      }
    )
  );
};
