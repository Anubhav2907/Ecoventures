const mongoose = require("mongoose");
const passportlocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;
const vendorSchema = new Schema({
  username: {
    type: String,
    unique: false,
    sparse: true,
  },
  password: String,
  email: {
    type: String,
    sparse: true,
  },
  facebook: {
    type: String,
    sparse: true,
  },
  google: {
    type: String,
    sparse: true,
  },
});
vendorSchema.plugin(passportlocalMongoose);
module.exports = mongoose.model("Vendor", vendorSchema);