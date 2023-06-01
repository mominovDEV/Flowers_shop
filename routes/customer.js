const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer");

// GetAllCustomers
router.get("/", customerController.GetAllCustomers);

// create a new customer
router.post("/", customerController.CreatCustomer);

//Get a single customer by ID
router.get("/:id", customerController.getcustomerById);

//Update a customer
router.put("/:id", customerController.updatecustomer);

//delete customer
router.delete("/:id", customerController.deletecustomer);

module.exports = router;
