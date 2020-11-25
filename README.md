# Project Name
> Bug Tracker


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)
* [Features](#features)
* [To-do List](#to-do-list)
* [Contact](#contact)


## General info
This project is an assignment regarded to Cloud Based Web Applications lecture, part of my HD in Computer Science, at CCT College. 


## Technologies 
* body-parser: 1.19.0
* express: 4.17.1
* mongodb: 3.6.2
* Nodemailer
* Insomnia
* Heroku


## Setup
* Download the project repository from GitHub in this link: https://github.com/rafaelaalves19/Bug-Tracker
* Open the project in an IDE
* Change the directory in the Terminal 
* Run npm install for installing all the dependecies
* Run npm start and pass the EMAIL, MONGO_URI and PASSWORD as envinroment variables


## Code Examples
GET routes: 
* Getting all users: GET / localhost / users
* Getting all issues: GET / localhost / issues
* Getting all projects: GET / localhost / projects
* Getting an individual user: GET /localhost / users / :email
* Getting an individual issue: GET / localhost/issues / :slug
* Getting all the issues related to a project: GET / localhost / projects / :slug / issues
* Getting all comment in an specific issue: GET / localhost / issues / :issueNumber / comments
* Getting an specific comment by an specific id: GET / localhost /issues / comments / :commentId
* Getting one specific project: GET / localhost / projects / :slug


ADD / POST routes:
* Adding a new user: POST / localhost / users
* Adding an issue in a project: POST / localhost / projects / :slug / issues
* Adding a comment in an issue: POST / localhost / issues / :issueNumber / comments
* Adding a new project: POST / localhost / projects



## Features
PART 1 - CBWA Assignment:
* Add and recover Projects
* Add and recover Issues
* Add and recover Users
* Add and recover Comments

PART 2 - CBWA Assignment:
* Error Checking implementation 
* Email notifications implementation
* Project Dockerized


## To-do List
* Develop the frontend interface
* Start unit testing
* Add in issue linking (blocking, blocks, relates to, etc)
* Add in due dates


## Contact
Created by [@rafaelaalves19](https://github.com/rafaelaalves19) - feel free to contact me!