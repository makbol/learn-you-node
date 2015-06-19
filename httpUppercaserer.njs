var http = require('http');
var server = http.createServer(function(request, response) {

	/* 
		Method 1
	*/
	if(request.method == 'POST') {
		request.on('data', function(data){
			var uppercased = data.toString().toUpperCase();
			response.write(uppercased);
		});

		request.on('end', function() {
			response.end();
		})
	}

	/* 
		Method 2
	*/
	// if(request.method == 'POST') {
		// 
	// }


});

server.listen(process.argv[2]);

