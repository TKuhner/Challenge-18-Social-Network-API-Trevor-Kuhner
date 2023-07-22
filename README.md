# Challenge-18-Social-Network-API-Trevor-Kuhner

## Description
This is a social network API that uses a NoSQL database. It allows users to share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

Data manipulation is done using CRUD methods in Insomnia Core. The user can create, get all, get individual, update, and delete users and thoughts. The user can also add and delete friends and reactions.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Walkthrough Video](#walkthrough-video)
* [License](#license)


## Installation

Clone the repository at:

```
https://github.com/TKuhner/Challenge-18-Social-Network-API-Trevor-Kuhner.git
```

To install necessary dependencies, run the following command:

```
npm i
```

## Usage

To start the server, run the following command:

```
npm start
```

Once the server is running, open Insomnia Core and use the CRUD methods to manipulate the data.

Include the following in the request URL:

```
http://localhost:3001/
```

 USER

    Get all users: GET /api/users
    Get a single user by its id: GET /api/users/:userId
    Create a new user: POST /api/users
    Update a user by its id: PUT /api/users/:userId
    Delete a user by its id: DELETE /api/user/:userId


 THOUGHT

    Create a new thought: POST /api/thoughts/
    Get all thoughts: GET /api/thoughts/
    Get a single thought by its id: GET /api/thoughts/:thoughtId
    Update a thought by its id: PUT /api/thoughts/:thoughtId
    Delete a thought by its id: DELETE /api/thoughts/:userId/:thoughtId

 REACTION

    Create a reaction: POST /api/thoughts/:thoughtId/reactions
    Delete a reaction by the reactionId: DEL /api/thoughts/:thoughtId/reactions/:reactionId

 FRIEND

    Add a new friend to a user's friend list: POST /api/users/:userid/friends/:friendId
    Delete a friend from a user's friend list: DELETE /api/users/:userid/friends/:friendId

## Technologies

* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose ODM
* Insomnia Core

## Walkthrough Video

<video src="Challenge%2018%20Merged.mp4" controls title="Title"></video>

## License

MIT License