/**
* server.js
* Created by Crane Leeon
* Copyright (c) 2015 Crane Studio. All rights reserved.
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var express = require('express');
var app = express();
var stringifyObject = require('stringify-object');
var compression = require('compression');

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        return false;
    }
    return compression.filter(req, res);
}

// app.engine('jade', require('html').__express);

app.use(compression({filter: shouldCompress}));

//---CustomConfig
var configDev =  function(){
	//----static resource
	var options4static = {
			dotfiles: 'ignore',
	//  etag: false,
			// extensions: ['htm', 'html'],
	 // index: ['index.html', 'index.htm'],
	//  maxAge: '1d',
			redirect: false,
			setHeaders: function (res, path, stat) {
				res.set('x-timestamp', Date.now());
			}
	};
	app.use(express.static('public', options4static));
	//---404
	var NOTFOUND = "Not found";
	app.get(function(req, res) {
	    res.status(404);
	    res.format({
	          html: function() {
	            res.sendFile('404.html',{root:'public/'});
	          },
	          json: function(){
	            res.send({ message: NOTFOUND });
	          },
	          'default': function() {
	            res.send({ message: NOTFOUND });
	          }
	    });
	});
};

switch(process.env.NODE_ENV){
	case 'dev': 
		configDev();
		break;
	default: require('./conf/cfg_'+process.env.NODE_ENV+'.js')(app);//init config from conf/cfg_xxx.js , xxx = NODE_ENV
}

//---Error Handler
app.use(function(err, req, res, next) {
	console.log(err);
	res.status(500).send({ message: 'Something broke!' });
});
console.info({'process.env': process.env});
var port = process.env.PORT || (process.env.NODE_APP_INSTANCE ? 8080 + Number.parseInt(process.env.NODE_APP_INSTANCE) : 8080);
app.listen(port);
console.log('Express server started on:'+port);



