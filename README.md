![react-redux-app-boilerplate](https://repository-images.githubusercontent.com/208453250/42fbbe80-decc-11e9-895e-987e17e554d8)

## Table of contents
* [How to install](#howtoinstall)
* [Use like template](#useliketemplate)
* [Getting started](#gettingstarted)
* [Run linter](#runlinter)
* [Run tests](#runtests)
* [Setup pre-commit](#precommit)
* [Project structure](#structure)

<a name="howtoinstall"></a>
## How to install
You need to clone repository and go to the project folder.
```bash
git clone https://github.com/awibox/react-redux-app-boilerplate.git ProjectName
cd ProjectName
```
Then to install required dependencies.
```bash
yarn install
```
<a name="useliketemplate"></a>
## Use like template
You can use this project like template. 
Press button "Use this template".
Then go to the project directory and install dependencies.
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
You can change the port in the [webpack.config.js](webpack.config.js)

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
react-redux-app-boilerplate/
|
├──public/                              // Directory for the build
|  ├──icons                             // Icons for the manifest.json and favicon
|  ├──favicon.ico
|  └──manifest.json                     // The web app manifest is a simple JSON file
|                                       // that tells the browser about your web application 
|                                       // and how it should behave when 'installed' 
|                                       // on the user's mobile device or desktop.
|
├──spec/                                // Directory with settings for jest tests
|   └──...                       
|                      
├──src/                                   
|   ├──actions                          // Redux actions
│   │   ├──[name]Actions.js   
│   │   ├──...                   
│   │   └──types.js                     // Redux Action Type Constants     
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
