const { reset } = require("nodemon");
const db = require("../config/db");

// GetAllCustomers
exports.GetAllOrders = (req, res) => {
  db.query("SELECT * FROM orders", (error, results) => {
    if (error) {
      console.log("Error retrieving Orders:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};
// create a new order
exports.CreatOrder = (req, res) => {
  const { customer_id, flower_id, quantity } = req.body;
  db.query(
    "INSERT INTO orders(customers_id, flower_id, quantity) VALUES(?,?,?)",
    [customer_id, flower_id, quantity],
    (error, results) => {
      if (error) {
        console.log("Error creating order:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "order create successfully",
        orderId: results.insertId,
      });
    }
  );
};

//Get a single order by ID
exports.getOrderById = (req, res) => {
  const orderId = req.params.id;
  db.query("Select * from orders where id=?", [orderId], (error, results) => {
    if (error) {
      console.log("Error retreving order:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "customer not found" });
    }
    res.json(results[0]);
  });
};

// Update a order
exports.updateOrder = (req, res) => {
  const orderId = req.params.id;
  const { customers_id, flower_id, quantity } = req.body;

  db.query(
    "UPDATE orders set customers_id = ?, flower_id=?, quantity=? where id = ?",
    [customers_id, flower_id, quantity, orderId],
    (error) => {
      if (error) {
        console.log("Error Updating order:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "order update successfully" });

      res.json(results[0]);
    }
  );
};

// Delete a order
exports.deleteorder = (req, res) => {
  const orderId = req.params.id;
  db.query("Delete from orders where id=?", [orderId], (error) => {
    if (error) {
      console.log("Error deleting order:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "order deleter successfully" });
  });
};
