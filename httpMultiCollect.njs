var http = require('http');

var results = [];
var count = 0;

function run(index) {

	var request = http.get(process.argv[index+2]);

	request.on('response', function(response) {

		var s = '';
		response.setEncoding('utf8');
		
		response.on('data', function(d) {
			s = s + d;
		});

		response.on('end', function() {
			results[index] = s;
			count++;
			if(count == 3) {
				for(var i = 0; i < results.length; i++) {
					console.log(results[i]);
				}
			}
		});

	});
}

for (var i = 0; i < 3; i++) {
	run(i);
}
