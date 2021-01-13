var express = require("express");

var router = express.Router();

// Import the model to use its db functions
var burger = require("../models/burger.js");

// Get route => index
router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerFlavors = {
            burger_flavor: data
        };
        console.log(burgerFlavors);
        res.render("index", burgerFlavors);
    });
});

module.exports = router;