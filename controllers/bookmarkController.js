var Bookmark = require('../models/Bookmark')
var Promise = require('bluebird')

module.exports = {

    get: function(params) {
        return new Promise(function(resolve, reject) {
            Bookmark.find(params, function(err, bookmarks) {
                if (err) {
                    reject(new Error('Bookmark not found.'))
                    return
                }

                if (bookmark == null){
                    reject(new Error('Bookmark not found.'))
                    return
                }

                resolve(bookmarks)
            })
        })
    },

    getById: function(id) {
        return new Promise(function(resolve, reject){

            Bookmark.findById(id, function(err, bookmarks) {
                if (err) {
                    reject(err)
                    return
                }

                resolve(bookmarks)
            })
        })
    }
}