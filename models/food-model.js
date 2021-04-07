var mongoose = require('mongoose')

var foodSchema = mongoose.Schema(
    {
        // กำหนดชื่อ และ ชนิดของ document
        name: {
            type: String
        },
        price: {
            type: Number
        }
    },
    {
        // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
        collection: 'FOODS',
    }
)

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Food = mongoose.model('foods', foodSchema)
module.exports = Food