var userblockevery_model = require("../models/userblockeveryday_model");
var express = require("express");
var router = express.Router();

router.get("/:blockNumber/:flatName/:secretaryPhoneNumber", function(req, res, next) { 
    userblockevery_model.getUserblockeveryday(req.params.blockNumber,req.params.flatName,req.params.secretaryPhoneNumber,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  
});




module.exports = router;