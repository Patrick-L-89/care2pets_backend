Hello there, thank you for reading this.

## Table of contents

- [Introduction](#Introduction)
- [Database](#Database)
- [Endpoints](#Endpoints)
- [Front end](#Front-end)
- [Git Workflow](#Git-Workflow)
- [Set up](#Set-up)

## Introduction

These lines of code are the result of my portfolio project which I made during my education at Codaisseur. The goal of this Portfolio is to show you a few of the things I can do with regards to coding. So without further ado, let's get into this.

The react app I made is for people with exotic pets. If you have some special pets you want to take good care of them. Maybe you are leaving with your familie and need someone to look after your special pet. Care for these kinds of animals is very different then for something more traditional like a dog. So this is where my app comes in. Here you can find some amazing people who are caretakers of their own animals.

You can do a few things on the site.
The first thing you might want to do is look at it's memebers. You can see them under the heading "caretakers"
If you are looking for caretakers of a particular animal, you can sort them by animal type.
Maybe you want to take care of animals yourself? Why not sign up and make your own profile?
If you made your profile, you can join the chat and your profile name will be loaded automatically. If you would rather not log in you can simply join with a self chosen username. There are several chatgroups so you can find what you're interested in.

Intially the scope and size of the webApp was very different. I planned to have an integrated Google API, but a chat app was a much better fit for the website. So the wireframe itself is no longer representative of the final product. It can be seen here [wireframe](https://wireframe.cc/dvThS6)

There is also a canban board for this project, but it was not kept up as vigourisly as it should have been. This is mostly because I had to move away from the Google API and decided to use a chat app. [Project Board](https://github.com/users/Patrick-L-89/projects/1)

## Database

Diagram of the database models: [wireframe with the database models](https://wireframe.cc/dvThS6)

## Endpoints

| Method | Path                     | Purpose                                      | Required Parameters            | Auth |
| ------ | ------------------------ | -------------------------------------------- | ------------------------------ | ---- |
| get    | /                        | test if it runs                              | none                           | no   |
| get    | /pets                    | see all the pets                             | none                           | no   |
| post   | /auth/signup             | send user info to create profile             | name, street, descriptoion etc | no   |
| post   | /login                   | send info for a login                        | email, password                | no   |
| get    | /me                      | get info on your own profile                 | none                           | yes  |
| get    | /caretakers              | get info on different caretakers             | none                           | no   |
| get    | /caretakers/:animalTypes | get info on a specific animal type caretaker | animaltypes, params            | no   |
| get    | /caretakers/mypets/:id   | get info about your own pet                  | id                             | no   |
| get    | /chatroom/               | see if the chatroom is up and running        | none                           | no   |

## Front end

You can find the front-end for this app [here](https://github.com/Patrick-L-89/portfolio-care2pets).

## Technologies used

- Express
- REST API
- PostgreSQL
- Sequelize ORM
- sockets.io

## Git Workflow

- In this build I used several branches. This is to show that I understand how to work in a project flow where different people work on several branches at the same time.
- I tried to use the most logical naming conventions for all the parts. This includes the branches, variables, component names, etc. I tried to make the app flow as logical as possible so future coders can easily find their feet if something ever needs to change, or when I will inevitably change some things.

## Set up

- Clone the app
- Cd into your project
- npm install
- npm start to start the app
