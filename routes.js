const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Under the Tree Home Page");
  });


 
   
  module.exports = router;