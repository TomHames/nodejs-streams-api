# Node.js Streams API

## Description

This project is a Node.js API using Express which can be consumed by any client and checks how many video streams a user is watching and prevents a user watching more than three streams concurrently.

## Installation

```
git clone https://github.com/TomHames/nodejs-streams-api.git
cd nodejs-streams-api
npm i
```

## Running the app

To run the app, ensure you are in the `nodejs-streams-api` directory and enter the following into the command line:

`npm start`

<hr>

Then use Postman, or any API development tool of your choice, to make a request to `http://locahost:3000/user/:userId/stream/:streamId`

Replace :userId and :streamId with text of your choice (e.g. `/user/tom/stream/123`).

<hr>

If using Postman you may need to create a new environment and set the URL variable to localhost:3000. To do this:

- Click Settings
- Add
- Provide environment name
- Set Variable = URL, Initial value = localhost:3000, Current value = localhost:300

## Database

A mock database has been used for this project for simplicity but also for lack of familiarity with using a database. If I were to use a database for this app, I would use MongoDB and also Mongoose as the modelling library. Considering scalability, Amazon's DynamoDB would be a good alternative database choice here, as it would provide the same document-based database with good performance and resiliency at scale.

## Monitoring

Given the scope of this challenge, `console.log` calls were suffice to provide the required info. A package, such as log4js, could be utilised here to improve the logs. And if the app was scaled, using AWS CloudWatch, or a service such as Logz.io, might be used here to track logs and monitor requests and errors.

## Testing

Unit tests were implemented using Mocha as a test runner and the Chai assertion library. Thus far, I have only added skeleton unit tests and added in pseudocode to show what I would test if time allowed.

I've set up scripts for testing purposes and linting during development.

## Improvements

Below are some improvements and further thoughts on this project:

- **Checking user** - currently this app's logic is based on a single user using the app at a given point in time. As the app is scaled, and a centralised database is utilised for multiple users, the logic should be updated to filter the records to the specific user making the request. A single controller could be used which includes the method to check streams and another method to check the user.

- **Testing** - to ensure my code works as expected, it could of been preferable to approach this project from a TDD perspective.

- **Database** - given more knowledge in this area, it would of been a good opportunity to have implemented a database such as MongoDB. If implemented using a database, I would update the functions to allow for asynchronous calls.

- **AWS** - a 2.0 of this app, along with update the things mentioned, would be to try and create this app using AWS services such as DynamoDB, CloudWatch logs and Lambdas to execute the code on.
