var fs = require('fs');
var buffer = null;

fs.readFile(process.argv[2], 'utf8', function (err, data) {
	if (err) throw err;

	buffer = data;

	console.log( buffer.split('\n').length - 1 );

});