var express = require('express');

//  above is requiring in the express file from the node_modules
// creating a NODE server **
// invoke express on var app
var app = express();


var messages = ["Hello there.",
 "I'm sorry, I cannot take any requests at this time.",
 "I can tell you how to do that."
 ];



// Adding the HEADERS
// Adding the HEADERS - OPTIONS
app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

// Adding the HEADERS
// Adding the HEADERS - GET
app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});


// req for request, res for response, and sometimes next
// app.get('/', function(req, res) {
// 	res.send(JSON.stringify({
// 		message: getRandomMessage()
// 	}))
// })

// create a listening port for this server
// app.listen(port#, callback function)
// app.listen(8887, function() { instead of this way do it like the following by adding the var port
var port = 8887;
app.listen(port, function() {
	console.log('listening on port', port)
});
// test by going to terminal and executing command >> nodemon server.js 
// if nodemon doesn't work, execute >> npm install nodemon -g << -g will save it globally 
// EXIT NODEMON by typing >> control + C

// Math.floor takes a decimal and rounds it down to a whole integer. Example: Math.floor will take 2.9 and return 2

function getRandomMessage() {
	var index = Math.floor(Math.random() * messages.length); 
	return messages[index];
}



















