var userblock_model = require("../models/userblock_model");
var express = require("express");
var router = express.Router();

router.get("/:blockNumber?/:flatName?/:secretaryPhoneNumber?", function(req, res, next) {
  if (req.params.blockNumber) {
    userblock_model.getUserBlockById(req.params.blockNumber,req.params.flatName,req.params.secretaryPhoneNumber,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    userblock_model.getAllUserBlock(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.delete("/:userPhoneNumber/:blockNumber/:flatName/:secretaryPhoneNumber", function(req, res, next) {
    userblock_model.deleteUserBlock(req.params.userPhoneNumber,req.params.blockNumber,req.params.flatName,req.params.secretaryPhoneNumber,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:blockNumber/:flatName/:secretaryPhoneNumber", function(req, res, next) {
    userblock_model.updateUserBlockById(req.params.blockNumber,req.params.flatName,req.params.secretaryPhoneNumber,req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post("/", function(req, res, next) {
    userblock_model.addUserBlock(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;