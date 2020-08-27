var everydayinout_lastactivity = require("../models/everydayinout_model");
var express = require("express");
var router = express.Router();

router.get("/:userPhoneNumber?", function(req, res, next) {
    everydayinout_lastactivity.getAllInOutEntriesforUser(req.params.userPhoneNumber, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

module.exports = router;