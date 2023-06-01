const { reset } = require("nodemon");
const db = require("../config/db");

//  getALLflowers
exports.getAllFlowers = (req, res) => {
  db.query("select * from flowers", (error, results, fields) => {
    if (error) {
      console.log("Error retrieving flowers:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
    // console.log(fields); // maydonlar haqidagi ma'lumo tkelib chiqdi
  });
};

// create a new flower
exports.createFlower = (req, res) => {
  const { name, color, price } = req.body;
  db.query(
    "INSERT INTO flowers(name, color,price) VALUES(?,?,?)",
    [name, color, price],
    (error, results) => {
      if (error) {
        console.log("Error creating flower:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "flower create successfully",
        flowerId: results.insertId,
      });
    }
  );
};

//Get a single flower by ID
exports.getFlowerById = (req, res) => {
  const flowerId = req.params.id;
  db.query("Select * from flowers where id=?", [flowerId], (error, results) => {
    if (error) {
      console.log("Error retreving flower:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "flower not found" });
    }

    res.json(results[0]);
  });
};

// Update a flower
exports.updateflower = (req, res) => {
  const flowerId = req.params.id;
  const { name, color, price } = req.body;

  db.query(
    "UPDATE flowers set name = ?, color = ?, price=? where id = ?",
    [name, color, price, flowerId],
    (error) => {
      if (error) {
        console.log("Error Updating flower:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "flower update successfully" });

      res.json(results[0]);
    }
  );
};

// Delete a flower
exports.deleteflower = (req, res) => {
  const flowerId = req.params.id;
  db.query("Delete from flowers where id=?", [flowerId], (error) => {
    if (error) {
      console.log("Error deleting flower:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "flower deleter successfully" });
  });
};
