/**
 * Created by Daniel on 29/11/2017.
 */
/**
 * Created by Daniel on 21/11/2017.
 */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients:[String],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0}
});

mongoose.model("surveys", surveySchema);
