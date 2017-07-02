var express = require("express"),
	bodyParser = require("body-parser"),
	router = express.Router(),
	path = require("path")


//Home Route

router.get("/", function(req,res) {
	res.render("index");
});

module.exports = router;