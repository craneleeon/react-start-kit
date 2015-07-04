//var express = require('express');
//var router = express.Router();
//router.get("./comment", function (req, res, next) {
//	var data = [
// 	   {author: "Pete Hunt", text: "This is one comment", key: 1},
// 	   {author: "Jordan Walke", text: "This is *another* comment", key: 2}
// 	];
// 	res.json(data);
//});
//module.exports = router;

//module.exports = function (req, res, next) {
//	var data = [
//  	   {author: "Pete Hunt", text: "This is one comment", key: 1},
//  	   {author: "Jordan Walke", text: "This is *another* comment", key: 2}
//  	];
//  	res.json(data);
//};
var fmt = require('../format');
var data = [
	{author: "Pete Hunt", text: "This is one comment", key: 1},
	{author: "Jordan Walke", text: "This is *another* comment", key: 2}
];
var count = 2;
module.exports = function(app, dir)
{   
	app.get(dir+"/rcomments", function (req, res, next) {
	 	res.json(data);
	});
	app.post(dir+"/rcomments", function (req, res, next) {
		var item = req.body;
		item.key = ++count;
		data.push(item);
		res.json(data);
	});
};