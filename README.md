# fake album api

public url: http://stevemu.com:6000/api/music_albums


## Need Install global npm modules first

```
sudo npm install webpack -g
sudo npm install cross-env -g
```

## How to start developing

```
export NODE_ENV=not_production
npm install
npm run server
npm run dev-server
```

Check your http://localhost:8080/

## How to deploy to production

to change the port, go to package.json and change 3000 to the port you desired

```
export NODE_ENV="production" 
npm install
npm run build-prod
npm run server
```

Check your http://${server}:3000/