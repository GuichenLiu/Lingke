const mongoose = require('mongoose')

var product_Schema = new mongoose.Schema({
    "_id": mongoose.Types.ObjectId,
    "No": { type: String, required: true },
    "Name": { type: String, required: true },
    "ShortName": { type: String, required: true },
    "Category": { type: String, required: true },
    "Platform": { type: String, required: true },
    "Type": { type: String, required: true },
    "Link": { type: String, required: true }
});

module.exports = mongoose.model('product_collection', product_Schema);