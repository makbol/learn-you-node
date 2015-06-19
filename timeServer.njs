var net = require('net');

function now() {

	var date = new Date();

	var year = date.getFullYear();
	var month = date.getMonth()+1;
	if(month < 10) {
		month = '0' + month; 
	}
	var day = date.getDate();

	var hours = date.getHours();
	var minutes = date.getMinutes();

	return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
}


var server = net.createServer( function(socket) {
	socket.end( now() + '\n');
});
server.listen(process.argv[2]);