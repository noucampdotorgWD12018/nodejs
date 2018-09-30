# Node.js Exercise 5 – MySQL Query
		
> Complete ALL the exercises in this section.

## Fetch latest Repository Branch

```
$ cd /DRIVE/xampp/htdocs/nodejs
$ git pull --no-edit https://github.com/noucampdotorgWD12018/nodejs.git latest
$ git status

```
## Part 1 – MySQL Music Database Query

1.  Run the Command Prompt window.

1.	In ``htdocs/nodejs/mysqlmusic`` create a new project ``package.json`` file using ``npm init`` command.

1.	Add the *npm* package ``mysql`` to the project

1.	View the ``packages.json`` file to ensure there are dependencies for the package just installed

1.  Examine the ``index.js`` file with code that connects to the MySQL server and runs the query.

1.  Ensure you are running a MySQL server.  Run XAMPP to do this.  Make sure it has the ``music`` database.

1.  Run the ``index.js`` file to test everything works.


## Part 2 – MySQL Music Database Query

1.  Change the query to retrieve all the rows from the ``album`` table and run ``index.js`` again.

1.  Change the query to retrieve only *New Order* albums and run again.

1.  Push your code to your private repository on GitHub. Type these commands into your Git Bash client:

    ```
    $ cd /<DRIVE>/xampp/htdocs/nodejs
    $ git status
    $ git add .
    $ git commit -m "Exercise 5 - DONE|PARTIAL|HELP"
    $ git push origin master
    $ git status
    ```
