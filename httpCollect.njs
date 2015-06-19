var http = require('http');

var totalResponseLength = 0;
var totalResponseString = "";

http.get(process.argv[2], function (response) {

	response.setEncoding('utf8');
	response.on('data', function (data) {
		
		totalResponseLength += data.length;
		totalResponseString += data;


	});

	response.on('end', function () {
		
		console.log(totalResponseLength);
		console.log(totalResponseString);

		

	})

});