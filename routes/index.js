const express = require("express");
const router = express.Router();

const flowerRoutes = require("./flower");
const customerRoutes = require("./customer");
const OrderRoutes = require("./order");

router.use("/flowers", flowerRoutes);
router.use("/customer", customerRoutes);
router.use("/order", OrderRoutes);

module.exports = router;
