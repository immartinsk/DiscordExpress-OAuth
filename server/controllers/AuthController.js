export const AuthenticateUser = (req, res) => {
  res.redirect("http://localhost:8080/about");
};

export const checkAuthentication = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(403).json("Unauthorized");
  } else {
    next();
  }
};

export const LogoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:8080");
  });
};
