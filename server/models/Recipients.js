/**
 * Created by Daniel on 30/11/2017.
 */
/**
 * Created by Daniel on 21/11/2017.
 */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
