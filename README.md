# RapidAPI Storage UI

> A Vuetify RapidAPI Storage UI project for running in Web and Cordova
> To run it with backend install RapidAPI Storage backend as described in https://github.com/Chart3JS/Rapid-s3/blob/master/README.md
> Suppose you installed this project as a sibling of the RapidAPI UI project in the same directory. So run 
``` run-on-express.sh ```
> in order to build a web app in the ``` public ``` forlder of Rapid-s3 backend project
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test

# build for production and cordova build. You need to configure host in the 
<PROJECT_ROOT>/src/services/Api.js to connect to deployed on cloud service or to allow routing to localhost:3001 on your device
npm run cordova-build

# build for production and serve the app through the browser - no hot reload.
npm run browser

# add respective platforms
cordova platform add android
cordova platform add ios

# build for production and serve the app on an iOS device
npm run ios

# build for production and serve the app on an android device (won't serve on a virtual device)
npm run android

# build for production and serve the app on an android device (will serve on a virtual device or physical device - prefers virtual)
npm run android-vm
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
