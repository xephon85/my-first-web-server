// require the express module
const express = require('express');

// create a new instance of the express module
const app = express();

//declare our route
app.get('/:message', function(request, response, next) {
  const { message } = request.params;
  return response.json(message);
});

//set our port to server application on
const port = 3000;

//Tell our instance of express to listen to request made on our port
app.listen(port, function() {
  console.log('listening on port: ${port}');
});
