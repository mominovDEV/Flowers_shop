const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/order");

//GetAllOrders
router.get("/", OrderController.GetAllOrders);

//create a new order
router.post("/", OrderController.CreatOrder);

//Get a single order
router.get("/:id", OrderController.getOrderById);

// Update a order
router.put("/:id", OrderController.updateOrder);

// Delete order
router.delete("/:id", OrderController.deleteorder);

// hammasida export buladi
module.exports = router;
