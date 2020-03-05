var Providers = require('../models/provider');
var mongoose = require('mongoose');
var express = require('express');

module.exports = function(app) {
    app.get('/providers', function(req, res) {
        Providers.find({}, function(err, data) {
            if (err) {
                console.log("get providers error:" + err);
            } else {
                res.render('providers', { title: "供应商", providers: data });
            }
        })
    });

    app.post('/providers', function(req, res) {
        if (req.body.create) {
            console.log("Creating Provider...");
            var name = req.body.name;
            var shortName = req.body.shortName;
            var contract = req.body.contract;
            var address = req.body.address;
            var contactPerson = req.body.contactPerson;
            var number = req.body.number;
            if (req.body.qq) {
                var qq = req.body.qq;
            }
            if (req.body.weChat) {
                var weChat = req.body.weChat;
            }
            var email = req.body.email;
            var taxNo = req.body.taxNo;
            var bankAcc = req.body.bankAcc;
            var bank = req.body.bank;
            var prepay = req.body.prepay;
            var terms = req.body.terms;
            var taxRate = req.body.taxRate / 100;
            var paymentPeriod = req.body.paymentPeriod;
            var startDate = req.body.startDate;
            var endDate = req.body.endDate;

            var provider = new Providers({
                    "_id": new mongoose.Types.ObjectId(),
                    "Name": name,
                    "ShortName": shortName,
                    "Contract": contract,
                    "ContactPerson": contactPerson,
                    "Address": address,
                    "Number": number,
                    "QQ": qq,
                    "WeChat": weChat,
                    "Email": email,
                    "TaxNo": taxNo,
                    "BankAcc": bankAcc,
                    "Bank": bank,
                    "Prepay": prepay,
                    "Terms": terms,
                    "TaxRate": taxRate,
                    "PaymentPeriod": paymentPeriod,
                    "StartDate": startDate,
                    "EndDate": endDate
                })
                // if (true) {

            // } else {
            provider.save(function(err, post) {
                    if (err) {
                        return console.log(err)
                    } else {
                        console.log(name + "is inserted to db. ")
                        res.redirect('/providers')
                    }
                })
                // }
        }
    })
}