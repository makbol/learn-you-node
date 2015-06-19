var fs = require('fs');
var path = require('path');


module.exports = function(dir, filter, callback) {

	var files = [];

	fs.readdir(dir, function(err, list) {

		if(err) return callback(err);

		list.forEach( function(fileName) {

			if( path.extname(fileName) === '.' + filter ) {
				files.push(fileName);
			}

		});

		callback(null, files);		
	});


}
