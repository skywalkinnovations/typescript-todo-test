# Simple Todo Test

This project will be used for testing.

The project is built with Node, Express and Typescript.

## Prerequisites

* Node: 8+
* NPM: 6+
* MySQL: 5.6+
* Typescript: 3+
* Git

## Installation

Once you have all of the above technologies installed on your system. You should clone this repository in order to set up the project on your local machine.

~~~~
git clone <repository-url>
~~~~ 

Then install the npm packages using the following command.

~~~~
npm install
~~~~

Once all the packages are install you should update the app-config.ts file with the details for your MySQL server.

~~~~
password: "Demo1234",
database: "todo_testing",
~~~~

After everything is installed and updated you should build the project running the following command.

~~~~
tsc
~~~~

Once you build the project run the npm script to run the application.

~~~~
npm start
~~~~