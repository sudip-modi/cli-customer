const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  firstname: "String",
  lastname: "String",
  phone: "Number",
  email: "String",
});

module.exports = mongoose.model("Customer", customerSchema);
