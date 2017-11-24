/**
 * Created by Daniel on 21/11/2017.
 */

const passport = require("passport");

module.exports = app => {
  //Route Handler 1
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  //Route Handler 2
  app.get("/auth/google/callback", passport.authenticate("google"));

  //Logout
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });


  //Route Handler 3
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
