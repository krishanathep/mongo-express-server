var mongoose = require('mongoose')

var postSchema = mongoose.Schema(
    {
        id: {
            type: Number
        },
        title: {
            type: String
        },
        body: {
            type: String
        }
    },
    {
        collection: 'POSTS'
    }
)

var Post = mongoose.model('posts', postSchema)
module.exports = Post