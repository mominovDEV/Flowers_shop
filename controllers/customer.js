const { reset } = require("nodemon");
const db = require("../config/db");

// GetAllCustomers
exports.GetAllCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (error, results) => {
    if (error) {
      console.log("Error retrieving Customers:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

// create a new customer
exports.CreatCustomer = (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO customers(name, email) VALUES(?,?)",
    [name, email],
    (error, results) => {
      if (error) {
        console.log("Error creating customer:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "customer create successfully",
        customerId: results.insertId,
      });
    }
  );
};

//Get a single customer by ID
exports.getcustomerById = (req, res) => {
  const customerId = req.params.id;
  db.query(
    "Select * from customers where id=?",
    [customerId],
    (error, results) => {
      if (error) {
        console.log("Error retreving customer:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "customer not found" });
      }
      res.json(results[0]);
    }
  );
};

// Update a customer
exports.updatecustomer = (req, res) => {
  const customerId = req.params.id;
  const { name, email } = req.body;

  db.query(
    "UPDATE customers set name = ?, email=? where id = ?",
    [name, email, customerId],
    (error) => {
      if (error) {
        console.log("Error Updating customer:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "customer update successfully" });

      res.json(results[0]);
    }
  );
};

// Delete a customer
exports.deletecustomer = (req, res) => {
  const customerId = req.params.id;
  db.query("Delete from customers where id=?", [customerId], (error) => {
    if (error) {
      console.log("Error deleting customer:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "cursomer deleter successfully" });
  });
};
