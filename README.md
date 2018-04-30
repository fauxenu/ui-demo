# Demo UI

This is a simple user interface demo for single-page React web application. It renders a homepage that contains a large hero element and a grid placeholder content tiles.

## Install & Run Instructions

Here a step-by-step guide to setup and run this project locally:

1. Install `node` and `yarn` or `npm` are installed
1. Clone this repository
1. Run `$ yarn install` to install all of the required project dependencies (React, webpack, etc)
1. Run `$ yarn run start` to starts the application in development mode
1. In your favorite browser (hopefully not Mosiac), go to [http://localhost:8080](http://localhost:8080)

## Available Scripts
From the project directory, you can run the following scripts:

### `yarn install`
Downloads and links all project dependencies

### `yarn run start`
Runs the application in development mode using `webpack-dev-server`. <br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn run eslint`
Checks the project code for code stye errors and warnings. Uses the [airbnb-react styleguide](https://github.com/airbnb/javascript/tree/master/react).

### `yarn run dev:build`
Creates a standalone development build. All files are output to the `/build` directory.

### `yarn run prod:build`
Creates a minified production-ready build. All files are output to the `/build` directory.
