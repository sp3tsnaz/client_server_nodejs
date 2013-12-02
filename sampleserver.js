//3rd commit
var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');

  c.on('end', function() {
    console.log('server disconnected');    
  });

  c.on('data', function(data) {
    console.log(data.toString());
  }); 
 
  console.log(c.address().address + "\r\n");	
  c.write("**" + (new Date).getTime().toString() + " is the server time**\r\n");
  c.pipe(c);   
  
});
server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});

