var ls = require('./dir.js');

ls(process.argv[2], process.argv[3], function(err, filteredFileList) {
	
	filteredFileList.forEach( function(filteredFileName) {
		console.log(filteredFileName);
	});

});	