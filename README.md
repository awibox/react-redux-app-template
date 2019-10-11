![react-redux-app-boilerplate](https://repository-images.githubusercontent.com/208453250/42fbbe80-decc-11e9-895e-987e17e554d8)


* [How to install](#howtoinstall)
* [Getting started](#gettingstarted)
* [Run linter](#runlinter)
* [Run tests](#runtests)
* [Setup pre-commit](#precommit)

<a name="howtoinstall"></a>
## How to install
You need to clone repository and go to the project folder.
```bash
git clone https://github.com/awibox/react-redux-app-boilerplate.git
cd react-redux-app-boilerplate
```
Then to install required dependencies.
```bash
yarn install
```
or
```bash
npm install
```

<a name="gettingstarted"></a>
## Getting started
To launch project you need to execute following command:

```bash
yarn start
```
or
```bash
npm start 
```
<a name="runlinter"></a>
## Run linter
For code checking we use ESLint with airbnb configuration.
To run linter you need to execute command:

```bash
yarn lint
```
or
```bash
npm run lint 
```
If you need to launch automatic mistakes fixing you need to execute following command:

```bash
yarn fix
```
or
```bash
npm run fix 
```
<a name="runtests"></a>
## Run tests
Jest with Enzyme is used for testing.

```bash
yarn test
```
or
```bash
npm run test 
```
<a name="precommit"></a>
## Setup pre-commit
You can set up git hook (pre-commit). In this case linter will be launched for necessary files before commit.

```bash
yarn setup
```
or
```bash
npm run setup
```

