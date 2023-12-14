// Create Web Server

var express = require('express');
var app = express();

// Create a router object
var router = express.Router();

// Export our router
module.exports = router;

// Route for our homepage
router.get('/', function(req, res) {
    res.send('Hello World!');
});

// Route for our about page
router.get('/about', function(req, res) {
    res.send('Hello About Page!');
});

// Route for our contact page
router.get('/contact', function(req, res) {
    res.send('Hello Contact Page!');
});

// Route for our profile page
router.get('/profile/:name', function(req, res) {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});