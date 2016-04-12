'use strict';

var _ = require('underscore');
var model = require('../models/badges');

/**
 * Send badges to model to be saved
 * Middleware
 */
exports.save = function(req, res, next) {
    var badges = _.clone(req.body); //to avoid modify the original and left is virgin to the followings middleware
    model.save(badges, function(err) {
        if (err) {
            //when return in a middleware it stops the execution, it doesn't call next(). We set the status code 503 to the response
            return res.json(503, {
                error: true
            });
        }

        next();

        model.trim();
    });
};

/**
 * Send badges to pub/sub socket in model
 * Middleware
 */
exports.send = function(req, res, next) {
    var badges = _.clone(req.body);
    model.send(badges, function(err) {
        if (err) return res.json(503, { error: true});
        res.json(200, {error: null});
    });
};

/**
 * Get 10 badges from model
 * @param req
 * @param res
 */
exports.get = function(req, res) {
    model.get(function(err, data) {
        if (err) return res.json(503, { error: true});
        res.json(200, data);
    });
};
