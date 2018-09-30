var http = require("http");
var url = require("url");

  
var myServer = http.createServer(function(request, response) {
    
    // NB:: ignore favicon.ico requests
    if (request.url == '/favicon.ico')
        return;
    
    var q = url.parse(request.url, true);
    console.log(q.query);
    
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.write(JSON.stringify(q.query));
    response.end();
   
});
 
myServer.listen(3000);
console.log("Server listening on port 3000");






