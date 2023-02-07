const mongoose = require("mongoose");

const worklogSchema = mongoose.Schema({
  user_id: {
    type: mongoose.ObjectId,
    ref: "userSchema",
    require: true,
  },
  profile_picture: {
    data: Buffer,
    contentType: String,
  },
  link: {
    type: String,
  },
  detail: {
    type: String,
    default: null,
  },
  status:{
    type: String,
    enum: ["SHOW", "HIDE"],
    default: "HIDE"
  }
});

module.exports = mongoose.model("worklog", worklogSchema);
