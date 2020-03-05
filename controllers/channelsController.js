var Channels = require('../models/channel');
var mongoose = require('mongoose');
var express = require('express');

module.exports = function(app) {
    app.get('/channels', function(req, res) {
        Channels.find({}, function(err, data) {
            if (err) {
                console.log("get channels error: " + err);
            } else {
                res.render('channels', { title: "渠道ID", Channels: data });
            }
        })
    })
}