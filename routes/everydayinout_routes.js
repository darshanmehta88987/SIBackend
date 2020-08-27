var everydayinout = require("../models/everydayinout_model");
var express = require("express");
var router = express.Router();

router.get("/:secretaryPhoneNumber?", function(req, res, next) {
    everydayinout.getAllInOutEnteryofSociety(req.params.secretaryPhoneNumber, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

router.post('/', function(req, res, next) {
    everydayinout.addEverydayInEntries(req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.put('/:phoneNumber?', function(req, res, next) {
    everydayinout.addEverydayOutEntries(req.params.phoneNumber, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;