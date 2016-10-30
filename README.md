# ERN Starter Boilerplate (Express.js + React.js + Node.js)

## Features

* Node.js serve the index.html; webpack-dev-server serve the bundle.js in development; in production, the node.js server will serve the built bundle.js (please `npm run built` first)
* css is bundled with webpack too
* webpack-dev-server with hot-reloading and history-api-fallback
* the node.js server (with express.js) handles the browser history fall-back too
* Use react-router
* use SASS
* include a Procfile for deploying for Heroku, this tells Heroku how to start run the server. It assumes the bundle.js is already in the repo. So don't gitignore the bundle.js file.

## How to start developing

make sure $NODE_ENV is not "production"
```
npm install
npm run dev
npm start
```

in development, the node.js server will only serve backend APIs. the webpack-dev-server serve the bundle.js html and handles hot-reloading and browser history api fallback - the front end.
Check your http://localhost:8080/

## Deploy to production (ssh on a remote server)

```
export NODE_ENV="production"
npm install
npm run build
npm start
```

in production, the node.js server serves everthing (both the bundle.js and html)
Check your http://localhost:3000/

## Deploy to Heroku

```
heroku login
heroku create
npm run build
git commit -am "update bundle.js"
git push heroku master
```

