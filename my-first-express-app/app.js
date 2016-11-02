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
   img: 'https://scontent.xx.fbcdn.net/v/t1.0-9/12193549_10153770533183258_6058267893669094163_n.jpg?oh=9dc31ebd4002203073b054439ace7f59&oe=5895D97A',
   likes: ['Games', 'Movies', 'Books', 'Science'],
   dislikes: ['The number 7', 'A florishy shade of Yellow', 'Turtles that go "wonk rooooooo!"', 'People with faces']
 });
});

// set up our server
const port = 3001;
app.listen(port, () => console.log(`Server listening on: ${port}`));
