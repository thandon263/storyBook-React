var mongoose = require('mongoose')

var BookmarkSchema = new mongoose.Schema({
    profile: {type:String, trim:true, default:''},
    title: {type:String, trim:true, default:''},
    url: {type:String, trim:true, default:''},
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('BookmarkSchema', BookmarkSchema)