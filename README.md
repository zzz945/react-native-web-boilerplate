#  IgniteBoilerplate
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* A React and React Native boilerplate for web ios and android apps. This project is heavily based on [ignite-ir-next](https://github.com/infinitered/ignite) and  [react-scripts](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `npm install`


## :arrow_forward: How to Run App

1. Install and run mongodb
  * https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
2. Run the server
  * create ENV.js in the project root
    ```
    export default {
      emailConfig: {
        address: 'example@xx.com',
        password: '......'
      }
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
    * Edit server.js, replace *** with the content of ./build/index.html
      ```
        function home (request, reply, locale) {
          VisitModel.findOneAndUpdate({name: 'visit'}, {$inc: {visit: 1}}, {new: true, upsert: true}).then(result => {
            const html = `***`
            reply(html)
          })
        }
      ```
    * And insert the script below inside the body tag
      ```
        <script>window.__VISIT_COUNT__ = ${result.visit};window.__LOCALE__=${JSON.stringify(locale)};window.__TRANSLATION__=${locale === 'en' ? JSON.stringify(en) : JSON.stringify(zh)}</script>
      ```
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
