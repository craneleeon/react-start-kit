/**
* server.js
* Created by Crane Leeon
* Copyright (c) 2015 Crane Studio. All rights reserved.
*/
if(!process.env.NODE_ENV) {process.env.NODE_ENV = 'development';}
console.info({'process.env': process.env});
var express = require('express');
var app = express();
var fmt = require('./backend/format');
var compression = require('compression');

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        return false
    }
    return compression.filter(req, res)
}

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
//Comment if on deployment uses nginx to serve static files (./public) 
app.use(express.static('public', options4static));

//---404
var NOTFOUND = "Page Not Found";
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
		    res.send(NOTFOUND);
		  }
	});
});

//---Error Handler
app.use(function(err, req, res, next) {
	console.log(err);
	res.status(500);
	res.format({
		  'text/plain': function(){
		    res.send('Something broke!');
		  },

		  'text/html': function(){
		    res.send('<p>Something broke!</p>');
		  },

		  'application/json': function(){
		    res.send({ message: 'Something broke!' });
		  },

		  'default': function() {
		    res.status(406).send('Not Acceptable');
		  }
	});
});

//---CustomConfig
app.configDev =  function(){
}
app.configProd = function(){	
};
switch(process.env.NODE_ENV){
	case 'development': 
		app.configDev();
		break;
	case 'production': 
		app.configProd();
		break;
}

require("./backend/routes")(app);

app.listen(8080);
console.log('Express server started');

