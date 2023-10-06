# Project 2 Your Space Music App (component application of Your Space )

### Link to GitHub repository:  https://github.com/alejandra-e-bernabel/YourSpace
### Castify link:   			https://drive.google.com/...

## Badges
    
![github](https://img.shields.io/badge/github-Profile-lightgrey.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow.svg)
![node.js](https://img.shields.io/badge/node.js-12.0-green.svg)
![npm](https://img.shields.io/badge/npm-6.14.4-blue.svg)
![Express](https://img.shields.io/badge/Express-red.svg)
![chrome castify](https://img.shields.io/badge/chrome%20castify-orange.svg)
![Sequelize](https://img.shields.io/badge/Sequelize-blue.svg)
![MySQL2](https://img.shields.io/badge/MySQL2-blue.svg)
![dotenv](https://img.shields.io/badge/dotenv-blue.svg)
![Heroku](https://img.shields.io/badge/Heroku-App-blueviolet?logo=heroku)


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Requirements](#requirements)
- [Mock-up](#mock-up)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

This application serves as a back-end eCommerce database server, utilizing key technologies such as ORM, MySQL2, Sequelize, Node.js, Express, and Insomnia. These technologies are employed to build and test the application, allowing for the use of Insomnia's CRUD commands to interact with API routes and their associated functionalities.  The database is dropped and recreated by executing the following commands:
	mysql -u root -pw;
	source ./db/schema.sql;

Following the creation of the database, the database models (tables) are defined and the initial data is seeded.  This is accomplished by executing the bash command: node ./seeds/index.js This command utilizes Sequelize to generate table models and establish associations based on the definitions in ./models/index.js. The file ./models/index.js imports Category.js, Product.js, ProductTag.js, and Tag.js scripts, which extend the built-in Sequelize model class and initialize model properties.

The next step is to start the backend server.  To start Server, execute the following bash command to run the ./server.js script: npm start. This script establishes a connection to the 'ecommerce_db' database by calling ./config/connection.js and sets up API routes by calling ./routes/index.js. the server application is now running and ready to serve API requests via Insomnia.

## Installation
  
1. create a new github repository named 'ormEcommerceBackEnd'
2. launch microsoft visual studio
3. enter cli:  cd ~/bootcamp/projects
4. enter cli:  git clone <repository> // creates YourSpace directory
5. enter cli:  cd YourSpace
6. enter cli:  git checkout -b music  // creates music branch
6. enter cli:  npm init // this initializes the package.json project file
7. Edit the `package.json` file to add the following dependencies:
   - "dotenv": "^8.2.0",
   - "express": "^4.17.1",
   - "mysql2": "^2.1.0",
   - "sequelize": "^5.21.7"
8. enter cli: npm install //install the dependencies
9. install Insomnia website: Go to Insomnia website using your web browser, download and install.
	- Go to the official Insomnia website at https://insomnia.rest/download/ to download the client.
	- Download Insomnia for Windows.
	- Run the downloaded installer and follow the installation instructions.
10. After running above steps create, create the following directory structure following the MVC architectural pattern
			
	Views (The View represents the user interface components and presentation layer.
	It is responsible for displaying data to the user and presenting it in a user-friendly format.
	The View listens for changes in the Model and updates itself accordingly.)
	Controller (The Controller acts as an intermediary between the Model and the View.
	It handles user input and translates it into actions that affect the Model or the View.
	The Controller receives user requests, processes them, and updates the Model or View as necessary.
	It helps decouple user interaction from the underlying application logic.)

my-music-app/
│
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── ... (other static assets)
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── ... (images, styles, etc.)
│   │   │
│   │   ├── components/
│   │   │   ├── App.js
│   │   │   ├── Home.js
│   │   │   ├── ...
│   │   │
│   │   ├── views/
│   │   │   ├── Layout.js
│   │   │   ├── UserView.js
│   │   │   ├── ...
│   │   │
│   │   ├── controllers/
│   │   │   ├── UserController.js
│   │   │   ├── MusicController.js
│   │   │   ├── ...
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Song.js
│   │   │   ├── ...
│   │   │
│   │   ├── routes/
│   │   │   ├── api.js
│   │   │   ├── userRoutes.js
│   │   │   ├── musicRoutes.js
│   │   │   ├── ...
│   │   │
│   │   └── index.js
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
├── server/
│   ├── controllers/
│   │   ├── UserController.js
│   │   ├── MusicController.js
│   │   ├── ...
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Song.js
│   │   ├── ...
│   │
│   ├── routes/
│   │   ├── api.js
│   │   ├── userRoutes.js
│   │   ├── musicRoutes.js
│   │   ├── ...
│   │
│   ├── server.js
│   ├── config.js
│   └── ...
│
├── database/
│   ├── migrations/
│   │   ├── ...
│   │
│   ├── seeds/
│   │   ├── ...
│   │
│   ├── knexfile.js
│   └── ...
│
├── node_modules/ (auto-generated, don't include in version control)
├── .gitignore
├── README.md
└── ...
Explanation of the directories:
client/: Contains the frontend code for your music app, including React components, views, styles, and static assets.
server/: Contains the backend code for your music app, including controllers, models, routes, and server configuration.
database/: Contains database-related files, including migrations and seeds for setting up and populating your database using a tool like Knex.js.



	routes
	   api
		category-routes.js
		index.js
		product-routes.js
		tag-routes.js	
	   index.js
	seeds
	   category-seeds.js
	   index.js
	   product-seeds.js
	   product-tag-seeds.js
	   tag-seeds.js
	.env
	.gitignore
	node_modules
	package.json		// confirm: created by npm		
	package-lock.json	// confirm: created by npm	
	README.md		// copy from challenge

## Usage

1. open MS Visual Studio and terminal
2. enter cli:  cd homework/ormEcommerceBackEnd
3. enter cli:  mysql -u root -p <when prompted enter password>
4. enter cli:  source ./db/schema.sql    // create the database
5. open a second MS Visual Studio terminal session
6. enter cli:  cd homework/ormEcommerceBackEnd
7. enter cli:  npm run seed
8. enter cli:  npm start
9. Launch Insomnia from your desktop or the Start menu.
10. After installation is complete, launch Insomnia from your applications or programs menu.
11. Open Insomnia and set up a new workspace.
12. Create Requests to test the API endpoints and organized into folders and CRUD request and request bodies.
13. Use the created requests to test the app by sending requests to API server (e.g., http://localhost:3001) and receive responses.

## Requirements
### Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application
* Concept: What is your user story? What was your motivation for development?
* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
* Demo: Show your stuff!

### Usage Requirements
The user story and acceptance criteria will depend on the project that you create, but your project must fulfil the following requirements:
* Use Node.js and Express.js to create a RESTful API.
* Use Handlebars.js as the template engine.
* Use MySQL and the Sequelize ORM for the database.
* Have both GET and POST routes for retrieving and adding new data.
* Use at least one new library, package, or technology that we haven’t discussed.
* Have a folder structure that meets the MVC paradigm.
* Include authentication (express-session and cookies).
* Protect API keys and sensitive information with environment variables.
* Be deployed using Heroku (with data).
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).
* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

### Functional Requirements
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Mock-Up

The following video the shows the application in use:
https://drive.google.com/file/...

## License

github, jses6, express.js
https://opensource.org/licenses/MIT

npm
https://opensource.org/licenses/Artistic-2.0


- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Contributing

1. Alejandra Bernabel
2. Madeleine Abraham
3. Yana Mishyna
4. Nicole Torres
5. Tom Fusco

## Tests

```
Test001: execute schema.sql, then verify ecommerce_db is created.
Test002: execute npm run seed, then verify the employees db is seeded with the starter date.
Test003: execute npm start, then verify the server is listening on port 3001.
Test004: using insomnia test the CRUD methods to exercise the database.
```

## Questions
  
### Github username
smokerdog57

### Github url
https://github.com/smokerdog57/ormEcommerceBackEnd
  
### Contact me
email: smokerdog57@gmail.com
phone: 941-221-1132

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
