# ERN Starter Boilerplate (Express.js + React.js + Node.js)

## Features

* Node.js serve the index.html and bundled js
* css is bundled with webpack too
* webpack watches new changes and compile the new bundle.js on-the-fly
* Use react-router
* the server (with express.js) handles the browser history fall-back
* use SASS
* support hot reloading during development. For production, set env NODE_ENV="production" to disable hot reloading.
* include a Procfile for deploying for Heroku, it will run the server automatically. It assumes the bundle.js is already in the repo. So don't gitignore the bundle.js file.

## How to start

Run:  
```
npm install
npm start
```

Check your http://localhost:3000/ or  `open http://localhost:3000/`

## How to start server
Run:  
`npm start`

## How to start code

Run:  
`npm run watch`
