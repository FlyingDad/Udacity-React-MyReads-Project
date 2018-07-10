# Front End Web Developer Nanodegree Course MyReads Project

This React.js App is a Bookcase that displays your books of interest. The bookcase has three shelves: Currently Reading, Want to Read, and Read. Each book has a selction that allows you to move books to different shelves, or delete them from your inventory.

---
## Table of Contents

* [Requirements](#requirements)
* [Dependencies](#dependencies)
* [Directions](#directions)
* [BookAPI](#Backend-Server)
* [Contributing](#contributing)

## Requirements
Browser capable of running ECMAScript 6 (ES6)

## Dependencies  
- [Google Roboto Font](https://fonts.googleapis.com/css?family=Roboto:400,700")
- React Documentation: [React: Getting Started](https://reactjs.org/docs/getting-started.html)
- [Node Package Manager (NPM)](https://www.npmjs.com/)
- This repository uses a provided [BookAPI](#BookAPI-Backend-Server) backend server.  


## Directions

1. On the command line, navigate to the project root folder and 'npm install'

2. You will need a local server running in order to run the app.

3. Open js/dbhelper.js and change line 12 to your local server port number.

4. If your IDE does not support live server, then you can run a local server by perfroming the following:

   - In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

   - With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
   - Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
   - Write code to implement the updates to get this site on its way to being a mobile-ready website.

5. On the command line, navigate to the projects root folder and 'npm start'


## BookAPI-Backend-Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

To get started...

#### Step 1

- *Option 1*
    - 🍴 Fork this repo!

- *Option 2*
    - 👯 Clone this repo to your local machine using `https://github.com/FlyingDad/Udacity-React-MyReads-Project.git`

#### Step 2

- *HACK AWAY!* 🔨🔨🔨

#### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/FlyingDad/Udacity-React-MyReads-Project" target="_blank">`https://github.com/FlyingDad/Udacity-React-MyReads-Project`</a>.