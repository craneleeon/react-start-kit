module.exports = function(app){
	var bodyParser = require('body-parser');
	app.use(bodyParser.json());
    var dir_api_sample = "/sample";
    require("./sample")(app, dir_api_sample);

};
