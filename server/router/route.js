const express = require("express");
const router = express.Router();

router.get("/view", (req, res) => {
  res.status(200).send("this is View");
});
//router.post();
///router.put();
//router.delete();
module.exports = router;
