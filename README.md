# my ern stack starter (react+express+node.js)

## Features

* Node.js serve the index.html and bundled js
* css is bundled with webpack too
* webpack watches new changes and compile the new bundle.js on-the-fly
* Use react-router
* the server (with express.js) handles the browser history fall-back
* use SASS
* support hot reloading during development when using dev server.
* backend port is specified in package.json via cross-env for easy change


## Need Install global npm modules first

```
sudo npm install webpack -g
sudo npm install cross-env -g
```

## How to start developing

```
export NODE_ENV="development" (or just not production)
npm install
npm run server
npm run dev-server
```

Check your http://localhost:8080/

## Deploy to production (ssh on a remote server)


```
export NODE_ENV="production"
npm install
npm run build-prod
npm run server
```
