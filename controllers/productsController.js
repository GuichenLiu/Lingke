var Products = require('../models/product');
var mongoose = require('mongoose');

module.exports = function(app) {
    app.get('/products', function(req, res) {
        Products.find({}, function(err, data) {
            if (err) {
                console.log("get products error:" + err);
            } else {
                res.render('products', { title: "产品", products: data });
            }
        })
    });
}