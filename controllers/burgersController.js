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

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (newBurger) {
        console.log("New Burger: " + req.body.burger_name);
        console.log(newBurger)
        res.redirect("/");
    });
});

module.exports = router;