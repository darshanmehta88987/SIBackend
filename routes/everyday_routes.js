var everyday_model = require("../models/everyday_model");
var express = require("express");
var router = express.Router();

router.get("/:id/:secretaryPhoneNumber", function(req, res, next) { 
    everyday_model.getAllEveryday(req.params.id,req.params.secretaryPhoneNumber,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  
});

router.get("/:id", function(req, res, next) { 
  everyday_model.getEverydayById(req.params.id,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });

});
router.delete("/:id", function(req, res, next) {
    everyday_model.deleteEveryday(req.params.id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function(req, res, next) {
    everyday_model.updateEverydayById(req.params.id,req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post("/", function(req, res, next) {
    everyday_model.addEveryday(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;