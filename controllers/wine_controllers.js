//Require modules
var express = require('express');
var burger = require('../models/wine.js');

var router = express.Router();

// Create all routes
router.get('/', function (req, res) {
	burger.selectAll(function (data) {
		var handlebars = {
			wine: data
		};
		res.render('index', handlebars);
	});
});

router.post("/api/wine", function (req, res) {
	burger.insertOne(req.body.wine_name, req.body.drank, function (result) {
		console.log(res)
		res.json({ id: result.insertId });
	});
});

router.put("/api/wine/:id", function (req, res) {
	var param = req.params.id;
	burger.updateOne(req.body.drank, param, function (result) {
		if (result.changedRows === 0) {
			return res.status(404).end();
		}

		res.status(200).end();
	});
});

// Export the router
module.exports = router;