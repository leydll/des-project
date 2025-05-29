# My Express Project

This is a small demonstration project using **Express.js** to :

- Serve static HTML pages
- Provide an endpoint API for JSON data
- Interact client-side with JavaScript and CSS

## Project structure

des-projet/
├── app.js
├── package.json
├── data/
│ └── data.json
├── public/
│ ├── index.html
│ ├── about.html
│ ├── contact.html
│ ├── style.css
│ └── script.js
├── .gitignore
└── README.md

## how to execute the project

**1️ - Download dependancies**

```bash
npm install
```

**2 - Launch the server**

```bash
node app.js
```

**3 - Open the browser**

Go to :

```
http://localhost:3000
```

## Features

- **Server Express.js**  
  Used to serve static pages (`public/`) and create an API endpoint for JSON.

- **Endpoint API**  
  `/api/data` returns data from file `data/data.json`.

- **3 pages HTML**

  - `index.html`: Home page with button for loading JSON data.
  - `about.html` : About page.
  - `contact.html` : Contact page.

- **Navbar**  
  A simple navigation bar for moving from one page to another.

- **CSS minimalist**  
  For a clean, professional finish.

- **JS client side**  
  Use `fetch()` and `async/await` to dynamically retrieve and display JSON data.

## About `.gitignore

The `.gitignore` file contains :

```
node_modules/
```

This avoids adding the `node_modules` folder to the Git repository, as it contains local dependencies.

## Customization

You can modify the `data/data.json` file to add or change the data dynamically displayed in `index.html`.

## Authors

Project carried out by **Leïla and Matthieu** - as part of a micro-project to learn the basics of **Node.js**, **Express**, and front-end integration.
