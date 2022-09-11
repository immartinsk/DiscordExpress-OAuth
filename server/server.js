const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const { Strategy, Scope } = require("@oauth-everything/passport-discord");
require("dotenv").config();

// Routing
const AuthRoute = require("./routes/Auth");

const app = express();

let whitelist = ['http://localhost:8080', 'http://localhost:3001']
const corsOptions = {
  credentials: true,
  origin: whitelist
}

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors(corsOptions))

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", AuthRoute);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use(
  new Strategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSECRET,
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

app.listen(3001, console.log("Server Started"));
