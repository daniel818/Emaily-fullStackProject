/**
 * Created by Daniel on 29/11/2017.
 */
/**
 * Created by Daniel on 21/11/2017.
 */
const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipients");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("surveys", surveySchema);
