var mongoose = require('mongoose')

var attractionSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        detail: {
            type: String
        },
        coverimage: {
            type: String
        },
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        },
    },
    {
        collection: 'ATTRACTIONS',
    }
)

var Attraction = mongoose.model('attractions', attractionSchema)
module.exports = Attraction