/**
* server.js
* Created by Crane Leeon
* Copyright (c) 2015 Crane Studio. All rights reserved.
*/
if(!process.env.NODE_ENV) {process.env.NODE_ENV = 'development';}
console.info({'process.env': process.env});
var express = require('express');
var app = express();
var stringifyObject = require('stringify-object');
var fmt = require('./backend/format');
var compression = require('compression');

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        return false
    }
    return compression.filter(req, res)
}

// app.engine('jade', require('html').__express);

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
app.use(compression({filter: shouldCompress}));

//---CustomConfig
app.configDev =  function(){
	console.info('Dev mode');
	app.use(express.static('public', options4static));
}

app.configProd = function(){	
	console.info('Prod mode');
};

require("./backend/routes")(app);

switch(process.env.NODE_ENV){
	case 'development': 
		app.configDev();
		break;
	case 'production': 
		app.configProd();
		break;
}

//---404
var NOTFOUND = "Not found";
app.use(function(req, res) {
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

//---Error Handler
app.use(function(err, req, res, next) {
	console.log(err);
	res.status(500).send({ message: 'Something broke!' });
});

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Express server started on:'+port);

