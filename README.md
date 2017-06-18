#  IgniteBoilerplate
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* A React and React Native boilerplate for web ios and android apps. This project is heavily based on [ignite-ir-next](https://github.com/infinitered/ignite) and  [react-scripts](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

* The boilerplate contains a simple server based on hapi, a react-web code base and a react native code base, sharing a lot of code including configs redux and sagas. The boilerplate is my personal website and app, I will be happy if you enjoy it.

## Online demo 

* http://59.110.219.108:8000

## Screenshot

### Web

* Screenshot1
![2017-06-18 5 58 18](https://user-images.githubusercontent.com/21496977/27259899-414d0d4a-5450-11e7-9d80-11e66167609d.png)
* Screenshot2
![2017-06-18 5 59 30](https://user-images.githubusercontent.com/21496977/27259896-412bd850-5450-11e7-94cc-6c78cff5673c.png)
* Screenshot3
![2017-06-18 5 59 47](https://user-images.githubusercontent.com/21496977/27259897-412c6a40-5450-11e7-86ac-b4acafb53905.png)

# Ios/Android

![2017-06-18 6 00 06](https://user-images.githubusercontent.com/21496977/27259898-41326620-5450-11e7-97fe-980ff33267e1.png)
![2017-06-18 6 00 29](https://user-images.githubusercontent.com/21496977/27259895-41282480-5450-11e7-9f18-d55f0e5a51e8.png)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `npm install`


## :arrow_forward: How to Run App

1. Install and run mongodb
  * https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
2. Run the server
  * create ENV.js in ./src like this:
    ```
    export default {
      emailConfig: {
        host: 'smtp.163.com',
        port: '465',
        address: '18504211831@163.com',
        password: '***'
      },
      baseURL: 'http://localhost:8000/'
    }
    ```
  * `npm run server-start`
3. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * run `react-native run-android`
  * for Web (development without server rendering)
    * run `npm run web-start`
  * for Web (production)
    * run `npm run web-build`
    * open localhost:8000 in browser

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [ghooks](https://github.com/gtramontina/ghooks). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).
