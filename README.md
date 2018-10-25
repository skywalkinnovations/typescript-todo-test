# Simple Todo Test

This project will be used for testing.

The project is built with Node, Express and Typescript.

## Prerequisites

* Node: 8+ - [NodeJS](https://nodejs.org/en/)
* NPM: 6+ - [NodeJS](https://nodejs.org/en/)
* MySQL: 5.6+ - [MySQL](https://www.mysql.com/)
* Workbench - [Workbench](https://www.mysql.com/products/workbench/)
* Typescript: 3+ - [TypeScript](https://www.typescriptlang.org/)
* Git - [Git](https://git-scm.com/)

## Installation

Once you have all of the above technologies installed on your system. You should clone this repository in order to set up the project on your local machine.

~~~~
git clone <repository-url>
~~~~ 

Then install the npm packages using the following command.

~~~~
npm install
~~~~

Create a database using workbench or any other mysql database management tool.

Once all the packages are install you should update the app-config.ts file with the details for your MySQL server.



~~~~
username: "root",
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