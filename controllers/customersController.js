var Customers = require('../models/customer');
var mongoose = require('mongoose');

module.exports = function(app) {
    app.get('/customers', function(req, res) {
        Customers.find({}, function(err, data) {
            if (err) {
                console.log("get customer error:" + err);
            } else {
                res.render('customers', { title: "客户", customers: data });
            }
        })
    });
}