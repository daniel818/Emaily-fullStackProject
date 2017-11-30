/**
 * Created by Daniel on 30/11/2017.
 */
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, user) => {

  });
};
