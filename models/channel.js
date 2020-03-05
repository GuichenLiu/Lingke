const mongoose = require('mongoose')

var channel_Schema = new mongoose.Schema({
    "_id": mongoose.Types.ObjectId,
    "No": { type: String, required: true },
    "Type": { type: String, required: true },
    "Status": { type: String, required: true },
    "Time": { type: Date, required: true },

})

module.exports = mongoose.model('channels_collection', channel_Schema);