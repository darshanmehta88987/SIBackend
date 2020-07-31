var userblock_model = require("../models/userblock_model");
var express = require("express");
var router = express.Router();


router.get("/:flatName/:userPhoneNumber/:secretaryPhoneNumber", function(req, res, next) {
  userblock_model.getUserBlockNumbers(req.params.flatName,req.params.userPhoneNumber,req.params.secretaryPhoneNumber,function(err, rows) {
  if (err) {
    res.json(err);
  } else {
    res.json(rows);
  }
});
});


router.get("/:userPhoneNumber/:secretaryPhoneNumber", function(req, res, next) {
  userblock_model.getUserbyUserPhoneNumberAndSecretaryPhoneNumber(req.params.userPhoneNumber,req.params.secretaryPhoneNumber,function(err, rows) {
  if (err) {
    res.json(err);
  } else {
    res.json(rows);
  }
});
});


router.get("/:userPhoneNumber", function(req, res, next) {
  userblock_model.getUserBlockOfParticularUser(req.params.userPhoneNumber,function(err, rows) {
  if (err) {
    res.json(err);
  } else {
    res.json(rows);
  }
});
});









module.exports = router;
