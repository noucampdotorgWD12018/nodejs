# Node.js Exercise 3 – JSON Server

> Complete ALL the exercises in this section.

## Fetch latest Repository Branch

```
$ cd /DRIVE/xampp/htdocs/nodejs
$ git pull --no-edit https://github.com/noucampdotorgWD12018/nodejs.git latest
$ git status

```

1.	Within the ``htdocs/nodejs`` folder create a subfolder called ``clubapi``.

1.	In ``clubapi`` create a subfolder called ``data`` and place the file ``clubs.json`` in it:

	```javascript
	{
	"clubs": [
	   { "name":"Chelsea" , "ground":"Stamford Bridge" },
	   { "name":"Liverpool" , "ground":"Anfield" },
	   { "name":"Manchester Utd" , "ground":"Old Trafford" },
	   { "name":"Arsenal" , "ground":"Emirates Stadium" }
	]
	}

	```

1.	In ``clubapi`` create and run the module ``api.js``:

	```javascript
	var http = require("http");
	var data = require("./data/clubs");

	var myServer = http.createServer(function(request, response) {
	   response.writeHead(200, {"Content-Type": "text/json"});
	   response.write(JSON.stringify(data));
	   response.end();
	});

	myServer.listen(3000);
	console.log("Server listening on port 3000");

	```

	Test it using the URL ``http://localhost:3000``

1.	Push your code to **your private** repository on GitHub.  Type these commands into your *Git Bash* client:

	```
	$ cd /<DRIVE>/xampp/htdocs/nodejs
	$ git status
	$ git add .
	$ git commit -m "Exercise 3 - DONE|PARTIAL|HELP"
	$ git push origin master
	$ git status

	```