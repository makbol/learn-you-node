var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	
	/* 
		Method 1
	*/
	// fs.createReadStream(process.argv[3]).pipe( response );


	/* 
		Method 2
	*/
	fs.createReadStream(process.argv[3]).on('data', function(data) {
		response.write(data);
	}).on('end', function() {
		response.end();
	});

});

server.listen(process.argv[2]);


