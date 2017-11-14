# React, Firebase app boilerplate

This repository is purposed to make developer easier to start project with react and firebase. This repo also
bundled with bunch of frontend library like redux, webpack etc. and also the theme of the boilerplate is using gentellala built on top of bootstrap framework.
> You can use this repository not only for firebase, but also another type of project using react.

> [Firebase](https://www.firebase.com) is a powerful platform for your mobile and web applications that lets you build apps fast without managing servers. Firebase gives you the tools and infrastructure to build better apps and grow successful businesses.

> [React](https://www.firebase.com) A javascript library for building user interfaces

## What's include?
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [firebase](https://www.npmjs.com/package/firebase)
* [react-router](https://github.com/rackt/react-router)
* [redux-promise](https://github.com/acdlite/redux-promise)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [eslint](https://github.com/eslint/eslint)
* [gentellala](https://github.com/puikinsh/gentelella) - Themes
* [bootstrap](https://getbootstrap.com/docs/3.3/getting-started/)
* [AirBnb eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)


Quick Start
-----------

```shell
$ git clone https://github.com/purnomoeko/react-firebase-boilerplate
$ cd react-firebase-boilerplate
$ npm install
$ npm run dev
```
Notes
------------
Please install webpack and webpack-dev-server globally. 


```
$ npm install -g webpack webpack-dev-server
```

Firebase settings
--------
First you need to create your firebase application to fetch settings for boilerplate. For more information how to add your web app check this [resource](https://firebase.google.com/docs/web/setup). After it copy your settings from firebase and fill ./src/config/index.js

```javascript
export const firebaseConfig = {

      apiKey: "",
      authDomain: "",
      databaseURL: "",
      storageBucket: "",
    }
};
export default firebaseConfig;
```


