# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

Implement an User Authentication System. Hash user's passwords before saving the user to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

   - JWT-based auth uses encrypted keys passed in HTTP request headers to authenticate a user's every request. With sessions, the user's information is stored in a session on the server. The session id is stored in a cookie on the client, but is also passed with every request to authenticate.

2. What does `bcrypt` do to help us store passwords in a secure manner.

   - Bcrypt allows us to securely hash passwords so that they can be stored in a database safely.

3. How are unit tests different from integration and end-to-end testing.

   - Unit testing is implemented in the scope of a single function, usually to check it against test cases to ensure it's being written correctly. Integration testing is the next step, wherein a developer begins to put the parts of the application together, and needs to test to ensure that key pieces function properly together. End-to-end testing is highly involved, and involves testing the entirety of the application as if you were a user. End-to-end testing aims to ensure that we can handle any event/input the user throws at us successfully.

4. How _Test Driven Development_ changes the way we write applications and tests.

   - Test-driven development is a methodology wherein tests are written in tandem with the script they are testing. This allows us to plan for edge cases as we write our scripts by letting us test our functions against a variety of variables.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

- [x] Create a forked copy of this project
- [x] Add your team lead as collaborator on Github
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [x] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [x] An authentication workflow with functionality for account creation and login implemented inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [x] Middleware used to restrict access to resources for non authenticated requests. Use the file: `./auth/authenticate-middleware.js` as a starting point.
- [x] Configuration for running tests using `Jest`.
- [x] A **minimum o 2 tests** per API endpoint.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [x] Write at least 4 tests per endpoint.
- [x] Extract user validation into a separate method and write unit tests for it.
- [x] Use a separate testing database for the endpoint tests.
- [ ] Implement authentication with the other method, if you used JWTs for MVP use sessions for stretch and vice versa.

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
