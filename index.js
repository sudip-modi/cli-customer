const mongoose = require("mongoose");
// const customer = require("./models/customer");

mongoose.Promise = global.Promise;

const db = mongoose.connect("mongodb://localhost:27017/customercli", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const customerSchema = mongoose.Schema({
  firstname: "String",
  lastname: "String",
  phone: "Number",
  email: "String",
});

// const Customer = require("./models/customer");

const Customer = mongoose.model("Customer", customerSchema);

//add customer
const addCustomer = (customer) => {
  const cus = new Customer(customer);
  cus.save(function (err) {
    if (err) {
      console.error(err);
    }
    // saved!
  });

  //   Customer.create(customer).then((customer) => {
  //     console.log("New customer added");
  //     console.log(customer);
  //     db.close();
  //   });
};
//find customer

const findCustomer = (customer) => {
  //make case insensitive

  const search = new RegExp(customer, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    }
  );
};

//exports
module.exports = {
  addCustomer,
  findCustomer,
};
