const express = require("express");
const router = express.Router();
const ctrl=require('../controller/controller')

router.get("/view", ctrl.view);
router.post("/add", ctrl.add);
router.put("/update",ctrl.update);
router.delete("/delete", ctrl.delete);
module.exports = router;
