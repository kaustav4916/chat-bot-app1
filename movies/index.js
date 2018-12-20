'use strict'
var request = require('request');
let movies=request.post('https://jsonplaceholder.typicode.com/post', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(app) // Print the google web page.
  } 
});
module.exports=movies;