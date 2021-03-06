const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/view/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});