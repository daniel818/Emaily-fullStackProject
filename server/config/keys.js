/**
 * Created by Daniel on 21/11/2017.
 */
if (process.env.NODE_ENV === "production") {
  //Use production keys
  module.exports = require("./prod");
} else {
  //use dev keys
  module.exports = require("./dev");
}
