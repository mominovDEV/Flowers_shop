const express = require("express");
const router = express.Router();
const flowerController = require("../controllers/flower");

//get ALL flowers
router.get("/", flowerController.getAllFlowers);

//create a new flower
router.post("/", flowerController.createFlower);

//get a single flower by ID
router.get("/:id", flowerController.getFlowerById);

// Update a flower
router.put("/:id", flowerController.updateflower);

// Delete a flower
router.delete("/:id", flowerController.deleteflower);

module.exports = router;
