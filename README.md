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
* Download the project repository from GitHub in this link: https://github.com/rafaelaalves19/cbwa-ca-1
* Open the project in an IDE
* Change the directory in the Terminal 
* Run npm install for installing all the dependecies
* Run npm start for running the application in the browser


## Code Examples
GET routes: 
* Getting all projects: GET / localhost / projects
* Getting all users: GET / localhost / users
* Getting all issues: GET / localhost / issues
* Getting all comments: GET / localhost / comments
* Getting individual projects by slug: GET / localhost / projects / :slug
* Getting users by email: GET / localhost / users / :email
* Getting all issues for a project by slug: GET / localhost / projects / :slug / issues
* Getting all comments for an issue: GET / localhost / issues / :issueNumber / comments
* Getting specific comment for an issue: GET / localhost / issues / :issueNumber / comments / :commentID

ADD / POST routes:
* Adding a new project: POST / localhost / projects
* Adding a new user: POST / localhost / users
* Adding a new issues: POST / localhost / projects / :slug / issues
* Adding a new comment to an issue: POST / localhost / issues / :issueNumber / comments


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
Created by [@rafaelaalves19] - feel free to contact me!