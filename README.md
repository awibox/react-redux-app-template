![react-redux-app-template](https://repository-images.githubusercontent.com/208453250/35dbd380-52a2-11ea-870e-335ecbd918d2)

<p align="center">
    <a href="https://travis-ci.org/awibox/react-redux-app-template">
        <img src='https://travis-ci.org/awibox/react-redux-app-template.svg?branch=master' alt='Build' />
    </a>
    <a href='https://coveralls.io/github/awibox/react-redux-app-template?branch=master'>
        <img src='https://coveralls.io/repos/github/awibox/react-redux-app-template/badge.svg?branch=master' alt='Coverage Status' />
    </a>
    <img src="https://img.shields.io/github/last-commit/awibox/react-redux-app-template" alt="Last commit">
    <img src="https://img.shields.io/github/license/awibox/react-redux-app-template" alt="license">
</p>

## Table of contents
* [How to install](#howtoinstall)
* [Getting started](#gettingstarted)
* [Run linter](#runlinter)
* [Run tests](#runtests)
* [Setup pre-commit](#precommit)
* [Project structure](#structure)

<a name="howtoinstall"></a>
## How to install
You can use this project like template. 
To do this, you need press button "**Use this template**".

Or clone repository and go to the project folder.
```bash
git clone https://github.com/awibox/react-redux-app-template.git ProjectName
cd ProjectName
```
Then you should install required dependencies.
```bash
yarn install
```

<a name="gettingstarted"></a>
## Getting started
To launch project you need to execute following command:
```bash
yarn start
```
Open in browser: [http://localhost:8888](http://localhost:8888) <br/>
You can change the port in the [webpack.config.js](webpack.config.js#L141)

<a name="runlinter"></a>
## ESlint
For code checking we use ESLint with airbnb configuration.
To run linter you need to execute command:

```bash
yarn lint
```

If you need to launch automatic mistakes fixing you need to execute following command:

```bash
yarn fix
```

<a name="runtests"></a>
## Jest tests
Jest with Enzyme is used for testing.

```bash
yarn test
```
<a name="precommit"></a>
## Setup pre-commit
You can set up git hook (pre-commit). In this case linter will be launched for necessary files before commit.

```bash
yarn setup
```
<a name="structure"></a>
## Project structure
```
react-redux-app-template/
|
├──public/                              // Directory for the build
|  ├──icons                             // Icons for the manifest.json and favicon
|  ├──favicon.ico
|  └──manifest.json                     // The web app manifest is a simple JSON file
|                                       // that tells the browser about your web application 
|                                       // and how it should behave when 'installed' 
|                                       // on the user's mobile device or desktop.
|
├──spec/                                // Directory with setup files for jest
|   └──...                       
|                      
├──src/                                   
|   ├──actions                          // Redux actions
│   │   ├──[name]Actions.js   
│   │   ├──...                   
│   │   └──types.js                     // Redux action type constants     
│   │
|   ├──components                       // Components that are reused                
│   │   ├──[Name] 
│   │   │   ├──[Name].js
│   │   │   ├──[Name].test.js           // Jest test
│   │   │   ├──[Name].test.js.snap      // Jest snapshot            
│   │   │   └──[Name].scss              // Components style         
│   │   └──...   
│   │  
|   ├──pages                            // Components that use redux connect (Containers)
│   │   ├──[Name] 
│   │   │   ├──[Name].js
│   │   │   ├──[Name].test.js           // Jest test
│   │   │   ├──[Name].test.js.snap      // Jest snapshot           
│   │   │   └──*[Name].scss             // Container styles (optional)        
│   │   └──...                                         
│   │
|   ├──reducers                         // Reducers
│   │   ├──[name]Reducer.js  
│   │   ├──[name]Reducer.test.js        // Jest test
│   │   ├──...  
│   │   └──index.js                     // combineReducers        
│   │
|   ├──selectors                        // reselect    
│   │   ├──[name]Selectors.js   
│   │   └──...
│   │
|   ├──styles                           
│   │   ├──_variables.scss              // SCSS variables (should be imported for use)
│   │   ├──build.scss                   // Basic styles
│   │   └──container.scss               // Style for router.js
│   │
|   ├──templates
│   │   └──index.html                   // The template by which index.html is created in public
│   │   
|   ├──config.js                        // Constant config 
|   ├──index.js                         // App entry
|   ├──router.js                        // Router
|   └──store.js                         // createStore 
|                                     
└──webpack.config.js                    // webpack config for development and production
```
