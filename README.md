# 5app-coding-challenge

First of all, thank you for the opportunity. I have compleated the challenge and set up a structure based on the challenge.

Here is the overview of the structure

```
├── config
|   └── index.js
├── Routes
|   └──controller
|     |       └── index.js
|   ├── handlers
|     |      └── __tests__
|     |       |         └── handlers.test.js
|     |       └──  index.js
|     └── babel.start.js
|   └── server.js
```

- on config folder, we have env variables which come from .env file on the root of the directory.
- on routes, we have a few simple files. Firstly index.js file keeps the main routes. In future, it might be handled easier. On controller, we have the callback function of routes. Which handles by express. 
- - On handler, we have our main logic. They are pure functions. They are every time returns the same output. Basically, firstly we filter for the first dimension of JSON, which is the count value, after getting the filtered data we reduce over it to create a new object with the required parameter, and also we need to check as well as sizes. Depends on the description, we are iterating through the file with the help of sizeFilter helper function. The tricky thing is sizes are strings. That's why we are splitting it and casting the type to integer so we can check if they are bigger than 64 and smaller than 128 on both sides.

- We have server file on the root of src and babel.start.js. We are using babel compiler because we are using es6. 

## Usage

To start the project you can use 

``npm run start:dev`` 

this command will run firstly test and starts the server with nodemon. 

`npm run start`

this command will start the server with pm2, as configured ecosystem.config.js file. Will use available maximum cores of your computer. On my computer it spaws 8 services. Wish could spaw 12 services :D That's fine :P  

### Make commands

I have configured make commands mostly for docker side of things 

```build-devcontainer```

builds development container.  Also on package json we have -inspect=0.0.0.0:9230 on start:dev, it is used for debugging from chrome console when you are working with devcontainer

```start-devcontainer```
builds development container. 

```build-container```
builds production container

```start-container```
starts production container as well

## Endpoint

I have separated the endpoints with versioning. 

Current endpoint is 

```http://localhost:9193//apiv1/modify```

## Testing Endpoint

If you are using the IntelliJ idea, you can use request.HTTP file to make the request to the endpoint with prefilled dummy data as you have requested or can use postman, restlet etc. 


Thank you for consideration
