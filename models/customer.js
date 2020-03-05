const mongoose = require('mongoose')

var customer_Schema = mongoose.Schema({
    "_id": mongoose.Types.ObjectId,
    "Name": { type: String, required: true },
    "ShortName": { type: String, required: true },
    "Status": { type: String, required: true },
    "Contract": { type: String, required: true },
    "Address": { type: String, required: true },
    "ContactPerson": { type: String, required: true },
    "Number": { type: Array, required: true },
    "QQ": { type: String, required: false },
    "WeChat": { type: String, required: false },
    "Email": { type: String, required: true },
    "TaxNo": { type: String, required: true },
    "BankAcc": { type: String, required: true },
    "Bank": { type: String, required: true },
    "Prepay": { type: Boolean, required: true },
    "Terms": { type: String, required: true },
    "TaxRate": { type: Number, required: true },
    "PaymentPeriod": { type: String, required: true },
    "StartDate": { type: Date, required: true },
    "EndDate": { type: Date, required: true },
    "Remarks": { type: Date, required: false }
});

module.exports = mongoose.model('customer_collection', customer_Schema);