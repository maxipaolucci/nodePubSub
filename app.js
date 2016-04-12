'use strict';

var express = require('express');
var app = express();
var badges = require('./controllers/badges');

app.use(express.json()); //this middleware is to say that we expect json in the petitions

app.post('/', badges.save, badges.send); //badges is a controller and save and send are actions
        //to add execute this route do:
        // curl -X POST http://localhost:8000 -H "content-type: application/json" -d '[{"badge_id" : "https://d1ffx7ull4987f.cloudfront.net/images/achievements/small_badge/525/adventures-in-web-animations-6487a1982fe734b2e288886f4727e54f.png"}]'


app.get('/badges', badges.get);

app.listen(8000, function () {
    console.log('Server is listening on port %d', 8000)
});