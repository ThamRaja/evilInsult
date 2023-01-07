const request = require('request');
const express = require('express');
const app = express();

app.get('/insult', (req, res) => {
  request('https://evilinsult.com/generate_insult.php?lang=en&type=json', (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    try {
      const insult = JSON.parse(body).insult;
      res.send(insult);
    } catch (error) {
      console.error(error);
    }
  });
});

app.get('/', function(request, response){
  response.sendFile('/Users/macos/Documents/my-app/index.html');
});

/*
app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});
*/

app.listen(3000, function () {
  console.log("Express server listening on port 3000");
  });