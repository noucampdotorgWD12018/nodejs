# Node.js Exercise 2 – HTTP Server

> Complete ALL the exercises in this section.

## Fetch latest Repository Branch

```
$ cd /DRIVE/xampp/htdocs/nodejs
$ git pull --no-edit https://github.com/noucampdotorgWD12018/nodejs.git latest
$ git status

```

Check your ``htdocs/nodejs`` folder.  You should have some new files in it.

1.	Within the ``htdocs/nodejs`` folder create a subfolder called ``httpserver``.

1.	In ``httpserver`` create and run the file ``server1.js``

	```java
	var http=require('http');

	var myServer=http.createServer(function(request,response) {

		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write("<b>hello world!</b>");
		response.end();

	});

	myServer.listen(3000);
	console.log("Type: localhost:3000 in your browser...");

	```

	Test it using the URL ``http://localhost:3000``

1.	Create and run the file ``server2.js``.

	```java
	var http=require('http');

	var myServer=http.createServer(function(request,response) {

		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write(`
						<html>
						<body>
						<h1>Home Page</h1>
						<p>Hello world...</p>
						</body>
						</html>
						`);
		response.end();
	});

	myServer.listen(3000);
	console.log("Goto localhost:3000 on your browser...")

	```

	Test it using the URL ``http://localhost:3000``

1.	Create and run the file ``server3.js``.

	```java
	var http=require('http');
	var fs=require('fs');

	var myServer=http.createServer(function(request,response) {
		response.writeHead(200, {"Content-Type" : "text/html"});
		var html=fs.readFileSync('demo.html', 'utf8');
		response.write(html);
		response.end();
	});

	myServer.listen(3000);
	console.log("Type: localhost:3000 in your browser...");

	```

	Create a HTML file ``demo.html`` yourself!
	
	Test it using the URL ``http://localhost:3000``

1.	Push your code to **your private** repository on GitHub.  Type these commands into your *Git Bash* client:

	```
	$ cd /<DRIVE>/xampp/htdocs/nodejs
	$ git status
	$ git add .
	$ git commit -m "Exercise 2 - DONE|PARTIAL|HELP"
	$ git push origin master
	$ git status

	```