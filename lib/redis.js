'use strict';

var redis = require('redis');
var client = redis.createClient();

client.on('error', function(err) {
    console.log(err);
});

client.on('connect', function () {
   console.log('Redis connected!!!')
});

module.exports = client;