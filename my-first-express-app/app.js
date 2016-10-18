// dependencies from node
const path = require('path');

// dependencies from npm (packages.json)
const express = require('express');
const ejs = require('ejs');

// create/initialize our app
const app = express();

// Set our Views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// add a route that renders our index view
app.get('/', function(req, res, next) {
  res.render('index.ejs', {
   greeting: 'Hi! My name is ',
   name: 'Colin.',
   intro: 'I live in my house, and love speghetti!',
   likes: ['Games', 'Movies', 'Books', 'Science']
 });
});

// set up our server
const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
