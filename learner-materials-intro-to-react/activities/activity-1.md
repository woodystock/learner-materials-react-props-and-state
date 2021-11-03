# Activity 1 - Explore the 'Create React App' file structure

Note: This document provides a guide to the files in this React app. Some of the files that are automatically created with Create React App have been deleted, other new files (like cat.png) have been added by Tech Returners. `npx create-react-app` gets you set up with the basic file structure of a React app which you can then edit and tweak as you see fit. Read below for more information.

### node_modules (folder) 

This contains all the dependencies that are needed for an initial working React app. If you add more packages to your project, they get stored in here

### .gitignore (file)

This file tells Git which files it can ignore (not upload to GitHub). This is because some files are massive (like our node_modules!) and some are secret, so you wouldn't want to put those on a GitHub 


### package.json (file)

You know those 'massive' files we tell git to ignore. Well we don't have to put these on GitHub because instead we have a package.json file, which acts as a *reference* to those massive file contents instead.

Our package.json is like a shopping list of all the dependencies (or node_modules!) needed for this specific project. When we run `yarn install` or `npm install` npm/yarn finds those packages (from our package.json shopping list) and adds them to our project for us. 
 
This has the added bonus of meaning anyone can clone this project, then run `yarn install` or `npm install` and they'll have the same project on their machine. Sweet.

### README.md (file)

This file uses markdown to tell us about the project. Here we define how to use and run a project, helpful instructions, links, summaries and more.

### yarn.lock (file)

Similar to a package.json this file checks for different versions of dependencies, keeping our project consistent across various machines.


### Public (folder)
This is our 'root' folder which gets served up to the browser as our React app

Our public folder contains: 

- favicon.ico (file)
This is an icon that is used in our index.html as a favicon. A favicon is a small picture that gets shown in a pages tab

- index.html (file)
This is a template file that gets served up when we run `yarn start`/`npm start` to launch our app. We inject React components in this files root div container. It is considered best practice not to create extra html files in the public folder as this file is all we need for our app to work.

- logo192.png & logo512.png(files)
These are React logos which have been deleted from this project in favour of content made by Tech Returners (when you make your own project you can delete or replace these files too!)

- manifest.json (file)
Mostly used to describe our app (name, author, icon, description etc), the purpose of the manifest is to install web applications to the homescreen of a device, providing users with quicker access to the app and a richer experience.

- robots.txt (file)
This file is for robots! 🤖 This file defines rules for Web Spiders, Scrapers and Crawlers when accessing this app. 🕷

### src (folder)
This is contains all the bits and bobs we want in our app! We can keep components, tests, css files here.

- App.css (file)
Here we can write css for our app (we can also delete this if we want)

- App.js (file)
This is the file that gets injected into our index.html file. We can create our own component in here or import other components into it. Currently our App.js file contains our Cat Cards

- App.test.js(file)
This file contains a basic test provided by React. We can tweak this or add more tests to it. We have made it check that 'Welcome to React' gets rendered in the browser.

- index.css(file)
Contains styles for general setup of our app - we can add to or delete this

- index.js(file)
This files injects our App.js file to our public folders index.html 'root' div, which in turn gets rendered to our browser. 

- logo.svg(file)
This was a React logo installed by `npx create-react-app` and has been deleted for this project

- reportWebVitals.js (file)
By default, Create React App includes a performance relayer that allows you to measure and analyze the performance of your application using different metrics.

- setupTests.js(file)
This file is what gets invoked when we run `yarn test`/`npm test` from the command line. 

- fonts (folder)
This was a folder added by Tech Returners and doesn't get automatically installed with `npx create-react-app`. Here we have some Catty fonts saved locally to use in our project
