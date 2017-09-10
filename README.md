## Team `The Ceaseless Salamanders`
### Web applications with Angular - Telerik Academy

### Links
* [Plugging Away](https://pluggingaway.herokuapp.com/)
* [Documentation](https://pluggingawaydocs.herokuapp.com/)
* [Trello](https://trello.com/b/2BUkxlsM/pluggingaway)

### Documentation
Run `npm run compodoc` to execute the documentation generation.
Run `npm run docs` for a docs server. Navigate to `http://localhost:4205/`.
The documentation will not automatically update itself if you change any of the source files.

### Tests
Run `ng test` to execute the tests.

# Course Project
_Web Applications with Angular_

This document describes the **course project assignment** for the [Single-page Applications with Angular](telerikacademy.com/courses/courses/Details/441) at Telerik Academy.

## Project Description

Design and implement a **Single-page web application** by your choice, using [Angular](https://angular.io/)

The application should have a:

### Public Part

The **public part** of your projects should be **visible without authentication**. This public part could be the application start page, application statistics, the user login and user registration forms.

### Private Part (Registered users area)

**Registered users** should have personal area in the web application accessible after **successful login**. This area could hold for example the user's profiles management functionality or the user's posts in a blog system.

## Technical Requirements

Your Web application should include the following:

- Create several **public dynamic web pages** and use them. &#10003;
- Create several **private (authenticated) dynamic web pages** and use them. &#10003;
- Create several **different pipes** and use them. &#10003;
- Create several **different directives** and use them. &#10003;
- Create several **modules** and use them in the **routing**. &#10003;
- All of the data should be loaded from a `web server` using **services**. &#10003;
  - You can either use `Firebase`, `Kinvey` or any other back-end service.
  - Or you can use your own server written in `Node.js`, `ASP.NET WebAPI` or any other technology.
- Unit test at **least 2 components**. &#10003;
- Integration test at **least 1 module**. &#10003;
- Implement responsive UI using Bootstrap 3 or 4, or Materialize. &#10003;
- Your project should pass the default TS linting configuration without any errors. &#10003;
- You can use Angular CLI, Webpack, SystemJS or any other module loader/bundler. &#10003;
- Your application should compile, work and produce an adequate result. &#10003;
    - Applications that do not adhere to these requirements, will be severely penalized or not accepted at all.

##  General Requirements

- Use Git &#10003;
  - Github, Gitlab, Bitbucket, or other online repository.
  - Each team member must have meaningful commits with adequate commit messages.
- Brief **documentation** of the project and the project architecture &#10003;
  - As `README.md` file at the root of the github repository

### Additional Requirements (Bonus points and real world skills)

- Use `git flow` or other **branching** workflow. &#10003;
- Build your application using an **agile project managment tool/system** &#10003;
    - Simple ones are Trello, ZenHub, GitHub Issues
    - More advanced ones are Jira, MS Team Services
- Upload your application in the cloud &#10003;
  - MS Azure, HerokuCloud, Amazon, all are fine
